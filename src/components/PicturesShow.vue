<template>
  <div class="pictures-show">
    <div class="pictures-top">
      <el-select
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button>按创建时间排序<span class="iconfont icon-paixu"></span></el-button>
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
import { getPictures } from '../api/pictures'
export default {
  name: 'PicturesShow',
  props: {
    msg: String
  },
  data () {
    return {
      pictures: [],
      options: [{
        value: '分类1',
        label: '分类1'
      }, {
        value: '分类2',
        label: '分类2'
      }, {
        value: '分类3',
        label: '分类3'
      }, {
        value: '分类4',
        label: '分类4'
      }, {
        value: '分类5',
        label: '分类5'
      }, {
        value: '其他分类',
        label: '其他分类'
      }],
      value: ''
    }
  },
  methods: {
    getPictures () {
      getPictures().then((res) => {
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
