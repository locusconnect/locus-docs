# Locus Documentation

This is a repository for Locus RLTS documentation.

[**Live Demo →**](https://docs.locusconnect.com)

## Adding a button

```html
<div class="relative w-20">
  <a href="/files/TOC.pdf" target="_blank" rel="noopener noreferrer" alt="Kit Contents" >  
    <img src="/assets/thumbnails/KitContents.png" alt="image" class="w-20 bg-orange-500/10 dark:bg-orange-500/10 rounded-lg p-2 shadow-md shadow-primary-100 dark:shadow-md dark:shadow-primary-1000/10" padding="1px" />
      <button className=" hover:bg-orange-300/10 dark:hover:bg-orange-100/10 absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl text-orange-600 dark:text-orange-50">
        PDF
      </button>
  </a>
</div>

```
