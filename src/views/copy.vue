<template>
  <div class="home">
    <van-button type="primary">Primary</van-button>
    <video
      :src="VideoSrc"
      id="video0"
      @loadeddata="myFunction"
      controls="controls"
    ></video>
    <input type="file" id="fileInput" @change="uploadVideo" />上传视频
    <canvas id="canvas" width="300" height="300"></canvas>
    <div id="shortCut" ref="shortCut"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      VideoSrc: "",
      canvasDom: null,
      canvasContext: null,
      imgDom: null,
      video: null,
      parentNode: null
    };
  },
  mounted() {
    console.log(1);
    this.video = document.getElementById("video0"); //video dom
    this.parentNode = this.$refs.shortCut; //parentNode dom
    this.canvasDom = document.getElementById("canvas"); //canvas dom
    this.imgDom = document.createElement("img"); //img dom
    if (this.canvasDom) {
      this.canvasContext = this.canvasDom.getContext("2d");
    }
  },
  methods: {
    uploadVideo(e) {
      this.canvasContext.clearRect(
        0,
        0,
        this.canvasDom.width,
        this.canvasDom.height
      );
      if (this.parentNode.innerHTML) {
        this.parentNode.innerHTML = "";
      }
      console.dir(this.parentNode, "111");
      console.log(e.target.files, "111");
      let FR = new FileReader();
      FR.readAsDataURL(e.target.files[0]); //读取文件并将文件以URL的形式保存在result属性中 base64格式
      FR.onload = event => {
        let url = event.target.result;
        this.VideoSrc = url;
        console.log(event.target.result, "444");
        // document.getElementById("video0").setAttribute("src", url);
        //   this.canvasContext.drawImage(
        //     video,
        //     0,
        //     0,
        //     this.canvasDom.width,
        //     this.canvasDom.height
        //   );
        //   let dataUrl = this.canvasDom.toDataURL("img/png");
        //   this.imgDom.src = dataUrl;
        //   this.imgDom.width = 400;
        //   this.imgDom.height = 400;
        //   parentNode.appendChild(this.imgDom);
        // };
      };
    },
    myFunction() {
      this.video = document.getElementById("video0");
      console.log(this.video, "style");
      let duration = this.video.duration;
      let i = 0;
      let VirtualDom = document.createDocumentFragment();
      let interval = setInterval(() => {
        this.video.currentTime = i;
        let canvasDom = document.createElement("canvas"); //canvas dom
        let canvasContext = canvasDom.getContext("2d");
        if (this.VideoSrc) {
          console.dir(this.video, "this.video");
          canvasContext.drawImage(
            this.video,
            0,
            0,
            canvasDom.width,
            canvasDom.height
          );
          let dataUrl = canvasDom.toDataURL("img/png");
          let imgDom = document.createElement("img");
          imgDom.src = dataUrl;
          imgDom.width = 400;
          imgDom.height = 400;
          i += 10;
          VirtualDom.appendChild(imgDom);
          console.log(i, duration, dataUrl, "11111");
          if (i > duration) {
            this.parentNode.appendChild(VirtualDom);
            this.video.currentTime = 0;
            clearInterval(interval);
          }

          // video.onloadeddata = ;
        }
      }, 100);
      console.log(444444444444);
      // if (this.VideoSrc) {
      //   console.dir(this.video, "this.video");

      //   this.canvasContext.drawImage(
      //     this.video,
      //     0,
      //     0,
      //     this.canvasDom.width,
      //     this.canvasDom.height
      //   );
      //   let dataUrl = this.canvasDom.toDataURL("img/png");
      //   this.imgDom.src = dataUrl;
      //   this.imgDom.width = 400;
      //   this.imgDom.height = 400;
      //   this.body.appendChild(this.imgDom);

      //   // video.onloadeddata = ;
      // }
    }
  },
  updated() {}
};
</script>

<style lang="scss" scoped>
#image {
  width: 200px;
  height: 200px;
}
#video0 {
  width: 0px;
  height: 0px;
  visibility: hidden;
}
</style>
