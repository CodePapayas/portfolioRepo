import React from 'react';

const TopicsPage = () => {
    return (
        <div>
            <h2>Web Dev Concepts</h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizeImg">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">Cascading Style Sheet</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>
                    Designated Home Page
                    - A designated home page serves as the entry point / main landing page of a website accessed through a web browser. Its primary role is to welcome visitors and guide them to other parts of the website based on their interests. It is usually titled ‘index.html’, as it is in this assignment. The server is configured to recognize these files as the default landing page without a specific file request in the URL. The default name of the file varies depending on the server; File names can be index.html, default.html (such as for .NET servers), or it could be index.js or index.php file types as well. In the Exploration for transferring a webpage to a server, the default landing page is demonstrated when we navigate to our M1 explorations folder and the index.html file is displayed automatically. 
                </p>
                <p>
                    Tab Output: Web Dev/Inspector Network
                    - According to the Explorations, when using Firefox, the <strong>Web Dev/Inspector Network tab</strong> displays the following information: page status, method, IP, policy, language, cache instructions, and browser version. The tab also displays the file's details, such as the file's size, type, and the time it took to load the file. When viewing the file from the web server, the file details are different because the file is being accessed from a different location. In the local version, 'Domain' is shown as my local IP address. In the server version, 'Domain' is shown as the server's IP address. The size of the file, as well as the time it took to load it, is also different because the file is being accessed from a different location.
                </p>
                <p>
                    Different Status Codes
                    - The favicon.ico file has a <strong>status 200 (OK)</strong> because it is a default file that is automatically loaded by the browser when a website is accessed. The main.css and main.js files have a <strong>status 404 (Not Found)</strong> because they have not been created yet in this location and thus do not exist. In the header of the HTML doc, both the main.css and script.js files were linked, so the server expected them to be there. When they were found to be missing, the server returned a 404 status code.
                </p>
                <p>
                    My Web Server URL: Deconstructed and Explained
                    - [https://web.engr.oregonstate.edu/~wilkinza/a1_wilkinza/index.html]
                    The scheme is HTTPS, which stands for <strong>Hypertext Transfer Protocol Secure.</strong> This indicates a secure connection to the server. The subdomain is 'web', which is a subdomain of 'engr', which is a subdomain of 'oregonstate', which is the host domain (the COE server where this file is hosted). The resources are '~wilkinza/a1_wilkinza/index.html', which is the path to the file on the server. This is the correct path to the file on the server, as indicated by it having my ONID username in the path and the file being displayed at this moment.
                </p>
            </article>

            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p> Frontend Design Explained:
                    <strong>Frontend design</strong> is the process of designing the user interface of a website or application. It involves creating the layout, user interface, and visual elements of the site that users interact with. Frontend design is important because it determines how users will interact with the website and their perception of the product and brand. It involves creating a user-friendly experience that is visually appealing, thematically consistent, easy to use, and intuitive to navigate. It uses color to set mood and enhance brand identity, emphasizes readable and stylistic fonts, and incorporates images and videos to engage users. Icons and an intuitive GUI design provide easy and logical site navigation, and responsive design ensures the site is accessible on all devices. All of this makes up the user experience, and it directly impacts their level of engagement and satisfaction with the product.
                </p>
                <h4>The Five "E's" of Usability</h4>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>For an app or website to be effective, it must help the user meet their goals. It must also ensure that the results given to the user are accurate.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>For an app or website to be efficient, it must help the user meet their goals quickly and with minimal effort.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>For an app or website to be easy to navigate, it must be easy to use, especially for new users. The user should be able to comprehend the websites' navigation as intuitively as possible.</dd>
                    <dt><strong>Error-Free</strong></dt>
                    <dd>For an app or website to be error-free, it must present a smooth experience to the user, free of bugs or errors. Common errors and roadblocks should be anticipated.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>For an app or website to be enjoyable, it must fit the needs of the intended audience and encourage return visits/continued usage. Also known as <strong>Engaging</strong>.</dd>
                </dl>
                <p>
                    Purpose of <strong>Page Layout Tags</strong>:
                    The <strong>main</strong> tag is used to contain the main content of the page, including <strong>sections</strong> and <strong>articles</strong>. The section tag is used to divide the content into sections; section tags house articles. The article tag is used to contain independent, self-contained content. The <strong>header</strong> tag is used to contain introductory content or navigational aids as well as the author's name, the publisher, and any marketing or branding slogan. The <strong>nav</strong> tag is used to contain navigation links. Common navigation links include: Home, About, Contact, Services, and Products. The <strong>footer</strong> tag is used to contain footer information, such as copyright information.
                </p>
                <h4>Anchors</h4>
                <ol>
                    <li><strong>Anchors</strong> link to internal, external, and page-to-page documents using either absolute or relative paths.</li>
                    <li>Absolute paths provide the complete path to the file from the root element. This makes it independent of the current directory.</li>
                    <li>Relative paths provide the path to the file relative to the current directory. This makes it dependent on the current directory.</li>
                    <li>Anchors link to <strong>external</strong> content by using the HREF attribute to specify the URL of the external content. When the anchor is clicked, the browser navigates to the specified URL.</li>
                    <li>Anchors link to <strong>internal</strong> content by using the HREF attribute to specify the <strong>ID</strong> of the internal content. When the anchor is clicked, the browser scrolls to the specified ID on the same page.</li>
                    <li>They link from <strong>page-to-page</strong> by using the HREF attribute to specify the URL of the page to link to. When the anchor is clicked, the browser navigates to the specified page.</li>
                </ol>
            </article>
            <article id="optimizeImg">
                <h3>Optimizing Images</h3>
                <p>
                    The Exploration lists five major image optimizing specifications: SVG, GIF, PNG, JPG, and WebP. <strong>SVG</strong> (Scalable Vector Graphics) is a vector image format that is resolution-independent and can be scaled to any size without losing quality. It is typically used for logos and icons with file sizes often below 10 KB. SVG files are marked with XML and are used for two-dimensional, interactive, or animated images. They support transparent backgrounds and have extremely small file sizes. <strong>GIF</strong> (Graphics Interchange Format) is a bitmap image format that supports animation and transparency, ideal for simple animations with reduced colors. GIFs utilize a palette of up to 256 colors (Indexed color mode), and the typical size ranges from 15 KB to 150 KB, suitable for animations of dimensions around 500x500 pixels. <strong>PNG</strong> (Portable Network Graphics) is a bitmap image format that provides support for transparency and lossless compression, preserving exact color and detail. PNG files are ideal for images with sharp contrast and hard edges, such as screenshots, and are typically saved in RGB color mode. Standard dimensions for web use are usually under 1000x1000 pixels with file sizes around 100 KB to 300 KB. <strong>JPG</strong> (Joint Photographic Experts Group) files compress well, which reduces file size significantly, making them ideal for photographs and detailed images. Recommended dimensions for web use are typically under 1920x1080 pixels, with file sizes ranging from 50 KB to 300 KB, depending on the compression level and image complexity. <strong>WebP</strong>, developed by Google, combines the features of PNG and JPG, supporting both lossy and lossless compression which makes it suitable for a wide range of web images. It allows for smaller file sizes and faster page load times, and is effective for images up to 1920x1080 pixels, with file sizes 25-34% smaller than comparable PNG or JPG images.
                </p>
                <p>
                    The appropriate file formats for photos are <strong>JPG</strong> and <strong>WebP</strong>. JPG is best for detailed, high-resolution photos, as it compresses well and maintains quality. WebP is also suitable for photos, as it is more efficient in terms of file size. The appropriate file format for line art is <strong>PNG</strong>, as it supports transparency and lossless compression, making it ideal for solid colors and line art. <strong>GIF</strong> is also suitable for line art, as it supports animation and transparency, but it is generally used for short animated clips.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    <strong>Favicons</strong> are small icons that represent a website, used primarily in browser tabs to help users identify and switch between sites. They typically measure 16x16 pixels or 32x32 pixels, though modern standards also support 48x48 pixels to ensure clarity on higher resolution displays. Favicons also appear next to bookmarks and in the browser's history and search bars for quick recognition. On mobile devices, favicons display on the home screen when a website is saved as a shortcut, acting like an app icon, where they can be sized up to 192x192 pixels to accommodate different screen resolutions. The most common file formats for favicons are ICO, PNG, and SVG. The ICO format can contain multiple images of different sizes to ensure compatibility across various platforms. Websites link favicons in their HTML documents using a 'link' tag in the head section, specifying the icon’s file path and type for browsers to fetch and display. This tag includes attributes like 'rel' set to "icon" and 'type' indicating the MIME type (e.g., image/png, image/x-icon). This setup ensures that the favicon is correctly recognized and rendered by web browsers and devices.
                </p>
            </article>
            <article id="css">
                <h3>Cascading Style Sheet</h3>
                <p>
                    Cascading Style Sheets, or <strong>CSS</strong> are a key part of web design. They make sure there is consistency across multiple parts of a website, help with efficiency by caching styles for faster load times, and provide flexibility for responsive designs across different devices. They also improve accessibility by enabling customizable presentation features. Importing a stylesheet enforces a clear separation between content (HTML) and styling (CSS), and makes maintaining the website easier due to its modular nature.
                </p>
                <h4>The Exploration lists five ways to incorporate styles in a website:</h4>
                <dl>
                    <dt>External Document: Link</dt>
                    <dd>
                        An external stylesheet can be linked within the HTML document to provide styling. This is the most common method of incorporating CSS stylesheets as it keeps the code separate and more easily maintained.
                    </dd>
                    <dt>External Document: Import</dt>
                    <dd>
                        If a stylesheet is designed for a specific component, it can be 'linked' using the '@' symbol like so: @import 'component.css'. This is also done in the HTML file.
                    </dd>
                    <dt>Embedded</dt>
                    <dd>
                        Styling can be embedded directly in an HTML document with a 'style' tag. The 'style' tag is wrapped around the target element and the styling is specified within curly brackets '{}'.
                    </dd>
                    <dt>Inline</dt>
                    <dd>
                        Styling can also be applied directly using the inline method. This method requires the styling be applied within the element itself, and it must be declared repeatedly if multiple stylings are to be applied. This method is outdated.
                    </dd>
                    <dt>JavaScript (DOM)</dt>
                    <dd>
                        Styling can also be applied directly using JavaScript. It is typically used for dynamic styling, adding reactivity to user interactions. This is achieved through manipulation of the <strong>Document Object Model</strong>, or <strong>DOM</strong>. This, along with the embedded and inline method, are intended for one-off stylings and are discouraged for general use.
                    </dd>
                </dl>
            </article>
        </div>
    );
};

export default TopicsPage;
