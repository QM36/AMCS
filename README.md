# AMCS
动漫素材收集系统 [Animation material collection system](http://qm36mmz.xyz/AMCS)

#### 10.19 
登录界面初版

#### 10.20 
* 修改登录和搜索界面UI
* 根据mock数据的接口，搜索框目前可以输入"123"和"234"，分别出现不同图片，若没有输入，则会出现提醒框
* 修改展示页面顶部UI
* 修改搜索页面UI：图片展示样式，图片内容，图片展示框的阴影
* 所有图的链接按钮可点击查看图片`url`

#### 10.21
* 修改展示页面颜色背景
* 接口增加图片描述，并展示在图片中
* 头像框加交互

#### 10.22
* 头像框交互适应各种屏幕
* 搜索页面不带参数跳转首页

#### 10.24
* 搜索框保留上次搜索数据

#### 10.28
* 可根据用户名、密码登录至主页面
* 点击用户名进入个人信息页面，目前可编辑昵称、个人介绍
* 点击logo可前往主页面
* 鼠标放置和离开头像，会显示和隐藏修改头像的文字提示一致给出提示
* 点击注册可进入注册页面，输入用户名、两次密码，能判断两次密码是否一致，注册成功后以登录身份返回主页面
* 点击退出可退出当前用户并保留在主页面
* TODO: 更换头像，修改密码，保存修改，其它个人信息的修改

#### 12.31
* 增加图片处理页面
* 修改以前图片url失效问题（不过调用接口之后就不用管了）
* 图片处理页面沿用之前的大致布局，头部导航栏，但是考虑到页面功能不要太过耦合，头部导航栏没有增加搜索功能
* 图片处理部分目前只有画笔和橡皮擦的功能，之后还有几个button的功能待完善：下载功能和众多滤镜
* open按钮的样式有点点问题：要找到合适的位置点击才会起效
* 由于图片的大小比例不一样，所以这一页的布局考虑问题太多，只能固定图片部分的高度不变，导致图片没有有效的方法居中，样式还是一个问题
