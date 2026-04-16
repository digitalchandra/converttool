export default function sitemap() {
    const baseUrl = "https://www.converttool.io/"
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/png-to-jpeg`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/jpeg-to-png`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/webp-to-jpg`,
        lastModified: new Date(),
      },
      {
        url:`${baseUrl}/webp-to-png`,
        lastModified:new Date(),
      },
      {
        url: `${baseUrl}/svg-to-png`,
        lastModified : new Date(),
      },
      {
        url: `${baseUrl}/jpg-to-webp`,
        lastModified : new Date(),
      },
      {
        url: `${baseUrl}/gif-to-jpg`,
        lastModified: new Date(),
      },
      {
        url : `${baseUrl}/heic-to-jpg`,
        lastModified : new Date(),
      },
      {
        url: `${baseUrl}/webp-to-png`,
        lastModified : new Date(),
      },


    ]
  }