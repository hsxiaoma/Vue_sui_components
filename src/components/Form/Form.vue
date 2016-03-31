<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">表单</h1>
    </header>
    <div class="content f-no-btm">
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-name"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">Name</div>
                <div class="item-input"><input type="text" placeholder="YourName"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-email"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">E-mail</div>
                <div class="item-input"><input type="email" placeholder="YourEmail"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-pwd"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">PassWord</div>
                <div class="item-input"><input type="password" placeholder="YourPassWord"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-gender"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">Gender</div>
                <div class="item-input">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-calendar"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">PassWord</div>
                <div class="item-input"><input type="date" placeholder="Birthday" value="2014-04-30"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-toggle"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">Switch</div>
                <div class="item-input">
                  <label class="label-switch">
                    <input type="checkbox">
                    <div class="checkbox"></div>
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="icon icon-form-comment"></i>
              </div>
              <div class="item-inner">
                <div class="item-title-label">Textarea</div>
                <div class="item-input"><textarea></textarea></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block">
        <div class="row">
          <div class="col-5">
            <button class="u-btn u-btn-big u-btn-fill u-btn-danger">取消</button>
          </div>
          <div class="col-5">
            <button class="u-btn u-btn-big u-btn-fill u-btn-success">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .f-no-btm {
    bottom: 0 !important;
  }
</style>
