import { test, expect } from '@playwright/test'; 
 
test('Validate Drag and Drop Slider from 15 to 95', async ({ page }) => { 
  // Navigate to Selenium Playground 
  await page.goto('https://www.testmuai.com/selenium-playground/'); 
 
  // Screenshot - Landing Page 
  await page.screenshot({ 
    path: 'screenshots/01-home-page.png', 
    fullPage: true, 
  }); 
 
  // Click Drag & Drop Sliders 
  const dragDropSliderLink = page.getByRole('link', { 
    name: /drag & drop sliders/i, 
  }); 
 
  await expect(dragDropSliderLink).toBeVisible(); 
  await dragDropSliderLink.click(); 
 
  // Validate URL 
  await expect(page).toHaveURL(/drag-drop-range-sliders-demo/); 
 
if (page.url().includes('drag-drop-range-sliders-demo')) { 
    console.log('   Navigation Successful'); 
  } else { 
    throw new Error('  Failed to navigate to Drag & Drop Sliders page'); 
  } 
 
  // Screenshot - Slider Page 
  await page.screenshot({ 
    path: 'screenshots/02-slider-page.png', 
    fullPage: true, 
  }); 
 
  // Slider having Default Value 15 
  const slider = page.locator("input[value='15']").first(); 
 
  await expect(slider).toBeVisible(); 
 
  // Move slider to 95 
  await slider.fill('95'); 
 
  // Output range value 
  const rangeValue = page.locator('#rangeSuccess'); 
 
  await expect(rangeValue).toBeVisible(); 
 
  // Screenshot after moving slider 
 
Classification: Internal 
  await page.screenshot({ 
    path: 'screenshots/03-slider-moved.png', 
    fullPage: true, 
  }); 
 
  // Validate displayed value 
  const actualValue = (await rangeValue.textContent())?.trim(); 
 
  if (actualValue === '95') { 
    console.log('   Test Pass'); 
    console.log(`Expected Value : 95`); 
    console.log(`Actual Value   : ${actualValue}`); 
  } else { 
    console.log('  Test Fail'); 
    console.log(`Expected Value : 95`); 
    console.log(`Actual Value   : ${actualValue}`); 
 
    throw new Error( 
      `Range value validation failed. Expected 95 but found ${actualValue}` 
    ); 
  } 
 
  // Playwright Assertion 
  await expect(rangeValue).toHaveText('95'); 
 
  // Final Screenshot 
Classification: Internal 
await page.screenshot({ 
path: 'screenshots/04-validation-passed.png', 
fullPage: true, 
}); 
console.log('   
}); 
Slider successfully moved to 95 and validated.');
