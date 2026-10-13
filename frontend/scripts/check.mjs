import { chromium } from '@playwright/test';
import { serve } from './preview.mjs';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const server=serve(4173);
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 for(const route of ['/','/about/','/expertise/','/projects/','/contact/','/careers/','/insights/','/terms/','/privacy/','/projects/mbr-city/','/insights/details-that-define-luxury/']){
  const response=await page.goto('http://127.0.0.1:4173'+route);assert.equal(response.status(),200,route);assert.equal(await page.locator('h1').count(),1,route);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,route+' desktop overflow');
  assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&i.naturalWidth===0).length),0,route+' broken images');
 }
 await page.goto('http://127.0.0.1:4173/projects/');await page.getByRole('button',{name:'Residential'}).click();assert.equal(await page.locator('.project-card').count(),2);await page.getByRole('button',{name:'Commercial'}).click();assert.equal(await page.locator('.project-card').count(),1);await page.getByRole('button',{name:'All projects'}).click();assert.equal(await page.locator('.project-card').count(),6);
 await page.getByRole('link',{name:'Locations & contexts'}).click();await page.waitForURL('**/#locations');assert.equal(await page.locator('.location-rows a').count(),5);await page.getByText('Are the photographs of completed KEA projects?').click();assert.equal(await page.locator('#project-questions details').nth(3).getAttribute('open'),'');
 for(const slug of ['mbr-city','palm-jumeirah','damac-lagoons','dubai-south','gutti','commercial']){await page.goto('http://127.0.0.1:4173/projects/'+slug+'/');assert.equal(await page.locator('.focus-grid article').count(),3);assert.equal(await page.locator('.related-work .project-card').count(),2)}
 for(const route of ['about','projects']){await page.goto('http://127.0.0.1:4173/'+route+'/');await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode()})));await page.screenshot({path:'qa/'+route+'-desktop.png',fullPage:true})}
 await page.goto('http://127.0.0.1:4173/contact/');await page.getByLabel('Full name').fill('Preview Tester');await page.getByLabel('Email address').fill('test@example.com');await page.getByLabel('Project type').selectOption('Luxury mansion / signature villa');await page.getByLabel('A little about your project').fill('Test project inquiry');await page.getByRole('checkbox').check();const download=page.waitForEvent('download');await page.getByRole('button',{name:'Prepare project inquiry'}).click();assert.equal((await download).suggestedFilename(),'KEA-project-inquiry.txt');assert.match(await page.getByRole('status').textContent(),/not been sent/);
 fs.mkdirSync('qa',{recursive:true});await page.goto('http://127.0.0.1:4173/');await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode()})));await page.screenshot({path:'qa/home-desktop.png',fullPage:true});await page.screenshot({path:'qa/hero-desktop.png'});
 await page.setViewportSize({width:390,height:844});await page.reload();await page.getByRole('button',{name:'Menu'}).click();await page.getByRole('navigation').getByRole('link',{name:'About us'}).click();await page.waitForURL('**/about/');assert.equal(await page.getByRole('button',{name:'Menu'}).getAttribute('aria-expanded'),'false');
 for(const route of ['/','/about/','/expertise/','/projects/','/contact/','/careers/','/insights/','/privacy/']){await page.goto('http://127.0.0.1:4173'+route);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,route+' mobile overflow')}
 await page.goto('http://127.0.0.1:4173/');await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode()})));await page.screenshot({path:'qa/home-mobile.png',fullPage:true});await page.screenshot({path:'qa/hero-mobile.png'});assert.deepEqual(errors,[]);console.log('PASS: 11 routes, desktop/mobile overflow, images, project filters, inquiry download, mobile navigation, no browser errors.');
}finally{await browser.close();server.close()}
