# Code example for https://github.com/reactjs/react-rails/issues/460

Check out the `require` tree in `/app/assets/javascripts`, starting from `application.js`.

At time of writing, `second_file.js` file never gets executed, due to babel inlining a polyfill at the top of the file, preventing sprockets from working.
