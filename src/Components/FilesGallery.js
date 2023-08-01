import React, { useEffect } from 'react';

const FilesGallery = () => {
  useEffect(() => {
    // Add all the script tags in the head section of the HTML to the useEffect function
    const scripts = [
      'https://cdn.jsdelivr.net/npm/sweetalert2@11.4.26/dist/sweetalert2.min.js',
      'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js',
      'https://cdn.jsdelivr.net/npm/@exeba/list.js@2.3.1/dist/list.min.js',
      'https://cdn.jsdelivr.net/npm/yall-js@3.2.0/dist/yall.min.js',
      'https://cdn.jsdelivr.net/npm/filesize@9.0.11/lib/filesize.min.js',
      'https://cdn.jsdelivr.net/npm/screenfull@5.2.0/dist/screenfull.min.js',
      'https://cdn.jsdelivr.net/npm/dayjs@1.11.5/dayjs.min.js',
      'https://cdn.jsdelivr.net/npm/dayjs@1.11.5/plugin/localizedFormat.js',
      'https://cdn.jsdelivr.net/npm/dayjs@1.11.5/plugin/relativeTime.js',
      'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
      'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js',
      'https://cdn.jsdelivr.net/npm/codemirror@5.65.6/mode/meta.js',
      'https://cdn.jsdelivr.net/npm/files.photo.gallery@0.7.0/js/files.js',
    ];

    const head = document.head;

    scripts.forEach((script) => {
      const scriptTag = document.createElement('script');
      scriptTag.src = script;
      scriptTag.async = true;
      head.appendChild(scriptTag);
    });
  }, []);

  return (
    <div>
      {/* Your gallery content goes here */}
      <h1>My Gallery</h1>
      <p>Here are some awesome photos and files!</p>
      <ul>
        <li>Photo 1.jpg</li>
        <li>Photo 2.jpg</li>
        <li>Document.pdf</li>
        {/* Add more items here */}
      </ul>
      {/* Add the main and aside sections with their respective contents */}
      <main id="main">
        <nav id="topbar" className="topbar-sticky">
          {/* Topbar content */}
          <div id="topbar-top">
            <div id="search-container">
              <input
                id="search"
                type="search"
                placeholder="search"
                size="1"
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                disabled
              />
            </div>
            <div id="change-layout" className="dropdown"></div>
            <div id="change-sort" className="dropdown"></div>
          </div>
          <div id="topbar-breadcrumbs">
            <div className="breadcrumbs-info"></div>
            <div id="breadcrumbs"></div>
          </div>
          <div id="topbar-info" className="info-hidden"></div>
          <div id="files-sortbar"></div>
        </nav>
        <div id="files-container">
          <div id="files" className="list files-rows"></div>
        </div>
      </main>
      <aside id="sidebar">
        {/* Sidebar content */}
        <button id="sidebar-toggle" type="button" className="btn-icon"></button>
        <div id="sidebar-inner">
          <div id="sidebar-topbar"></div>
          <div id="sidebar-menu"></div>
        </div>
      </aside>
      <div id="sidebar-bg"></div>

      {/* Modal */}
      <div id="modal-bg"></div>
      <div className="modal" id="files_modal" tabIndex="-1" role="dialog" data-action="close"></div>

      {/* Context menu */}
      <div id="contextmenu" className="dropdown-menu"></div>
    </div>
  );
};


export default FilesGallery;
