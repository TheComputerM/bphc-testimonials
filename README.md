# BPHC Testimonials

I don't trust the yearbook nostalgia people to display, save, truncate or just print our testimonials properly, so here is a *app*? to scrape and convert your testimonials into a beautiful looking PDF / Website / Slide Show.

[Demo PDF](./demo/Demo.pdf)

| | |
|:---:|:---:|
| ![Page 1](./demo/1.jpg) | ![Page 2](./demo/2.jpg) |
| ![Page 3](./demo/3.jpg) | ![Page 4](./demo/4.jpg) |



## Steps

### Install this project

Make sure you have bunjs installed, then clone this repository and install the dependencies:

```sh
bun i
```

This project uses [open-slide](https://open-slide.dev/) to develop the slide show.

### Scrape Testimonials

Go to https://yearbooknostalgia.com/portal/user-testimonial and open the **Sequence** tab. Write the following code to the browser console:

```js
[...document.querySelectorAll('.test-sec')].map(el => ({
       name:    el.querySelector('.postname')?.textContent.trim() ?? '',
       email:   el.querySelector('.col-lg-6 p')?.textContent.trim() ?? '',
       comment: el.title ?? '',
     }))
```

Then right click the output and select **Copy Object**.
Then paste the output into the ./slides/testimonials/assets/data.json, make sure its in the same shape.

### Preview and Modify

To preview the slide show, run the following command:

```sh
bun dev
```

You can then ask you AI agent to modify the slide show as needed, and the changes will be reflected in the preview.

### Export

There is an export option to convert the slide show into a PDF or Website on the preview itself.

#### Made By TheComputerM (Mudit Somani)
