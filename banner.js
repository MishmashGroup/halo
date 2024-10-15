const fs = require('fs');
const path = require('path');
const package = require('./package.json');

const srcPath = path.join(__dirname, 'src/halo.js'); // Source file to read and update

// Create the banner
const banner = `/*!
 * 
 *    Library Name: ${package.name}
 *    Description: ${package.description}
 *    Author: ${package.author}
 *    Contributors: ${package.contributors.join(", ")}
 *    License: ${package.license}
 *    Version: ${package.version}
 *
 */
`;

// Function to check if the file has the exact same banner
const hasBanner = (data) => {
  // Escape special characters to match the banner exactly
  const escapedBanner = banner.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape regex special characters
  const bannerRegex = new RegExp(`^${escapedBanner.trim()}`);
  return bannerRegex.test(data);
};

// Read the source file
fs.readFile(srcPath, 'utf8', (err, data) => {
  if (err) throw err;

  let updatedContent;

  if (hasBanner(data)) {
    // If the banner is the same, no need to add it
    console.log('Banner already exists and is up to date.');
    return; // Exit the script without modifying the file
  } else {
    // If the banner is missing or different, add it
    const contentWithoutOldBanner = data.replace(/\/\*\!([\s\S]*?)\*\//, '').trim(); // Remove any existing banner
    updatedContent = banner + '\n' + contentWithoutOldBanner;
  }

  // Write the updated content back to the source file
  fs.writeFile(srcPath, updatedContent, (err) => {
    if (err) throw err;
    console.log('Banner added or updated in the source file!');
  });
});
