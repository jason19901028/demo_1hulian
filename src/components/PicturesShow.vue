<template>
  <div class="pictures-show">
    <div class="pictures-top">
      <el-select
        v-model="value"
        placeholder="请选择分类"
        @change="changeClassify"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button @click="picturesSort">按创建时间排序<span :class="['iconfont', ascending ? 'icon-paixu-sheng' : 'icon-paixujiang']"></span></el-button>
    </div>
    <ul>
      <li
        v-for="item in pictures"
        :key="item.id"
      >
        <div class="picture-wraper">
          <img
            :src="item.url"
            alt=""
          >
          <div class="picture-description">
            <div>
              <strong>图片名称：</strong>
              <span>{{item.name}}</span>
            </div>
            <div>
              <strong>所属分类：</strong>
              <span>{{item.classifyName}}</span>
            </div>
          </div>
          <div class="picture-time">
            <strong>创建时间：</strong>
            <span>{{item.createTime}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPictures, selectionSort, picturesSort } from '../api/pictures'
export default {
  name: 'PicturesShow',
  props: {
    msg: String
  },
  data () {
    return {
      pictures: [],
      options: [{
        value: 1,
        label: '分类1'
      }, {
        value: 2,
        label: '分类2'
      }, {
        value: 3,
        label: '分类3'
      }, {
        value: 4,
        label: '分类4'
      }, {
        value: 5,
        label: '分类5'
      }, {
        value: 0,
        label: '其他分类'
      }],
      value: '',
      ascending: false
    }
  },
  methods: {
    getPictures () {
      getPictures().then((res) => {
        this.pictures = res.data
      })
    },
    changeClassify (value) {
      let params = {
        classifyId: value
      }
      selectionSort(JSON.stringify(params)).then((res) => {
        this.pictures = res.data
      })
    },
    picturesSort () {
      this.ascending = !this.ascending
      if (this.ascending) {
        this.changePicturesSort(0)
      } else {
        this.changePicturesSort(1)
      }
    },
    changePicturesSort (sort) {
      let params = {
        sort: sort
      }
      picturesSort(JSON.stringify(params)).then((res) => {
        this.pictures = res.data
      })
    }
  },
  mounted () {
    this.getPictures()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pictures-show {
  width: 400px;
  margin: 0 auto;
  ul li {
    display: flex;
    justify-content: center;
    .picture-wraper {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      img {
        width: 400px;
        height: 300px;
      }
      .picture-description {
        display: flex;
        div:first-child {
          margin-right: 30px;
        }
      }
      .picture-time {
        display: flex;
        justify-content: flex-start;
      }
    }
  }
  .pictures-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>
