const fs = require('fs');

function insertAfter(str, search, insert) {
  const index = str.indexOf(search);
  if (index === -1) {
    console.warn(`Could not find search string in file!`);
    return str;
  }
  return str.substring(0, index + search.length) + insert + str.substring(index + search.length);
}

let indexHtml = fs.readFileSync('index.html', 'utf8');

const targetString = `                  <div class="mt-5 flex gap-3">
                    <a href="product-detail.html?id=cat-dining" class="rounded-full bg-[#2C3E50] px-5 py-2.5 text-sm font-semibold text-white">View Details</a>
                  </div>
                </div>
              </article>`;

const newCards = `
              <article class="product-card overflow-hidden rounded-[1.5rem] bg-white" data-product-card data-category="single-bed" data-search="single bed">
                <img src="images/singlebed1.png" alt="Single Bed" class="h-64 w-full object-cover" loading="lazy" />
                <div class="p-6">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <h3 class="font-heading text-xl font-semibold text-[#2C3E50]">Single Bed</h3>
                      <p class="mt-2 text-sm text-slate-500">Comfortable and space-saving single beds.</p>
                    </div>
                    <span class="rounded-full bg-[#8B4513]/10 px-3 py-1 text-xs font-semibold text-primary">Comfort</span>
                  </div>
                  <div class="mt-5 flex gap-3">
                    <a href="product-detail.html?id=cat-single-bed" class="rounded-full bg-[#2C3E50] px-5 py-2.5 text-sm font-semibold text-white">View Details</a>
                  </div>
                </div>
              </article>
              <article class="product-card overflow-hidden rounded-[1.5rem] bg-white" data-product-card data-category="tv-unit" data-search="tv unit">
                <img src="images/tv_unit1.jpeg" alt="TV Unit" class="h-64 w-full object-cover" loading="lazy" />
                <div class="p-6">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <h3 class="font-heading text-xl font-semibold text-[#2C3E50]">TV Unit</h3>
                      <p class="mt-2 text-sm text-slate-500">Modern and stylish TV units for your living room.</p>
                    </div>
                    <span class="rounded-full bg-[#8B4513]/10 px-3 py-1 text-xs font-semibold text-primary">Modern</span>
                  </div>
                  <div class="mt-5 flex gap-3">
                    <a href="product-detail.html?id=cat-tv-unit" class="rounded-full bg-[#2C3E50] px-5 py-2.5 text-sm font-semibold text-white">View Details</a>
                  </div>
                </div>
              </article>`;

indexHtml = insertAfter(indexHtml, targetString, newCards);

fs.writeFileSync('index.html', indexHtml);
console.log('index.html updated successfully.');
