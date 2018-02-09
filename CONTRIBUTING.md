# Contributing

## Before You Start

* Open a Github issue
* Provide a link to your script
* Get a review on your video script
* Mark your issue as "In Progress"

[Sample Github Issue](https://docs.google.com/document/d/1YOU_eo1oJcxRQYrE0fCVhj_Axb2am1DtdwulYxDqbk8/edit)

Each contribution should consist of two parts...

**Part 1** - Impress Me

**Part 2** - Teach Me

## Impress Me

This is a short video - less than 60 seconds which highights one to two cool
things about the feature you are covering. The point of this video is simply to
"impress" the viewer with functionality they may not know existed.

[Sample "Impress Me" Video](https://www.youtube.com/watch?v=jmPs3HWk0Wk)

> Note that multiple "Impress Me" videos can be created for a single "Teach Me"
> video. For instance, Emmet might have 3 "Impress Me" videos...

1. Emmet expansion
2. Wrap with Abbreviation
3. Update Image Size

Yet the "Teach Me" Emmet video will have all of those concepts in the same
video.

### Recording Specs

* Record at 1280 x 720
* Use Monokai Dark Theme
* Use these VS Code settings for consistency: [GitHub gist](https://gist.github.com/clarkio/8489b26afe352f6e6feb0f1b7fcde0a8)
* Hide the sidebar whenever code is being shown
* Move deliberately. There is no sound so the user needs to be able to follow
  with their eyes
* Use callouts when necessary
* Use annotations to highlight different ideas

## Teach Me

This is a longer video that will accompany the short "Impress Me" video. The
goal of this video is to dive deep into a paticular topic and show the user
"everything there is to know" about a feature or extension.

[View Example](https://www.youtube.com/watch?v=0f-cGPcGx5c)

### Recording Specs

Same as "Impress Me", but with sound.

### Adding To Site

* Upload the video to YouTube
* Create a feature branch
* Modify the `src/store/store.js` file to include your video and a brief
  description. Include any User Preferences settings or keyboard shortcuts.
* Wrap any code samples in the following markup...

  ```
  <pre v-highlightjs>
  <code class="javascript">

  <!-- your code goes here -->

  </code >
  </pre>
  ```

* Wrap any keyboard shortcuts in a &lt;code&gt; tag
* Submit a PR and notify two people that you would like to review
* PR is merged pending passing review
