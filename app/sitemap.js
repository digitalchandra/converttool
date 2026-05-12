export default function sitemap() {
    const baseUrl = "https://www.converttool.io/"
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}image/png-to-jpeg`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}image/jpeg-to-png`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}image/webp-to-jpg`,
        lastModified: new Date(),
      },
      {
        url:`${baseUrl}image/webp-to-png`,
        lastModified:new Date(),
      },
      {
        url: `${baseUrl}image/svg-to-png`,
        lastModified : new Date(),
      },
      {
        url: `${baseUrl}image/jpg-to-webp`,
        lastModified : new Date(),
      },
      {
        url: `${baseUrl}image/gif-to-jpg`,
        lastModified: new Date(),
      },
      {
        url : `${baseUrl}image/heic-to-jpg`,
        lastModified : new Date(),
      },
      {
        url: `${baseUrl}image/webp-to-png`,
        lastModified : new Date(),
      },
      {
        url:`${baseUrl}utility/onlinenotepad`,
        lastModified : new Date(),
      },

    ]
  }