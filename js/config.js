// 通过修改config_json变量，修改页面加载的数据
var config_json = {
    // 网站图标替换文件 img/icon.jpg
    "index": {
        // 标题可以修改成 xx非官方页
        "title": "刻耳柏洛梅芙Meifu 非官方页",
        // B站主页的跳转设置，修改为vtb本人的uid即可
        "bili_uid": "3493084635597352"
    },
    // 首页
    "homepage": {
        "carousel-item_div": [
            // json数组形式加载 轮播图
            {
                "name": "刻耳柏洛梅芙Meifu",
                "introduction": "日文名：ケルベロ·メイフ<br>罗马音：kerubero meifu<br>天才地狱犬",
                "bg_img": "img/人物大图.jpg"
            },
            {
                "name": "设定图",
                "introduction": "中间的头是主人格<br>左边的头负责帮忙直播和拍摄(幕后)<br>右边的头基本上每天都在睡",
                "bg_img": "img/设定图.png"
            }
        ]  
    },
    // 关于页面
    "about": {
        // 可以嵌入html代码
        "introductionCH": "基于LayUI开发~",
        "introductionJP": "日文版",
        "introductionEN": "英文版"
    },
    // dd视频 dd切片页
    "ddVideo": {
        "video_data": [
            // json数组形式加载 b站视频
            {
                "up" : "minato-neko",
                "title" : "[刻耳柏洛梅芙Meifu][20230422录播]【B限】原神＆聊天~❕[直播回放]",
                "src" : "//player.bilibili.com/player.html?aid=485343977&bvid=BV1CT411n78r&cid=1105515839&page=1"
            },
            {
                "up" : "东方萌",
                "title" : "刻耳柏洛梅芙Meifu授课日语五十音——清音（ ）",
                "src" : "//player.bilibili.com/player.html?aid=526612571&bvid=BV1EM411g7PF&cid=1069598225&page=1"
            },
            {
                "up" : "日本Vtuber観察室",
                "title" : "日本天才狗狗 刻耳柏洛梅芙Meifu 看中500万都没有他笑的开心！",
                "src" : "//player.bilibili.com/player.html?aid=952462831&bvid=BV1Hs4y1P7vG&cid=1093995793&page=1"
            },
            {
                "up" : "日本Vtuber観察室",
                "title" : "日本天才狗狗 刻耳柏洛梅芙Meifu 看日本雌小鬼308的恐怖故事 非常的感同身受",
                "src" : "//player.bilibili.com/player.html?aid=655050748&bvid=BV1Ka4y1K7au&cid=1098884821&page=1"
            },
            {
                "up" : "东方萌",
                "title" : "梅芙快骂我~~~我是变态桑！两分钟纯享",
                "src" : "//player.bilibili.com/player.html?aid=950995012&bvid=BV1Ms4y1V7my&cid=1053477851&page=1"
            },
            {
                "up" : "东方萌",
                "title" : "刻耳柏洛梅芙读唐诗《春晓》",
                "src" : "//player.bilibili.com/player.html?aid=312187503&bvid=BV1bN411P7j9&cid=1088390567&page=1"
            },
            {
                "up" : "日本Vtuber観察室",
                "title" : "日本天才狗狗 刻耳柏洛梅芙Meifu 看模型姐妹homo名場面",
                "src" : "//player.bilibili.com/player.html?aid=611626432&bvid=BV1Q84y1u7bi&cid=1071156261&page=1"
            },
            {
                "up" : "日本Vtuber観察室",
                "title" : "日本天才狗狗 刻耳柏洛梅芙Meifu 看日本萝莉女仆看孤獨搖滾逆天二創 要元視頻作者出來談人生",
                "src" : "//player.bilibili.com/player.html?aid=441696484&bvid=BV1bL411Q7Lk&cid=1074220256&page=1"
            },
            {
                "up" : "日本Vtuber観察室",
                "title" : "日本天才狗狗 刻耳柏洛梅芙Meifu 看孤獨搖滾(美少女遊戲版) 被嚇的話都結吧了",
                "src" : "//player.bilibili.com/player.html?aid=311754408&bvid=BV12N411P7FU&cid=1076677483&page=1"
            },
        ]
    },
    // 表情包
    "emoticon": {
        "introduction": "表情包 页面，imgData填入图片文件名，图片必须存放在项目img/emoticon路径下，不然无法识别，注意了哈",
        "imgData": [
            // 图片需要挨个追加
            "1.gif",
            "2.gif",
            "3.gif",
            "4.gif",
            "5.gif",
            "1.png", 
            "2.png",
            "3.png",
            "4.png",
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
            "19.jpg",
            "20.jpg",
            "21.jpg",
            "22.jpg",
            "23.jpg",
        ]
    },
    // 群友语录页面
    "groupQuotations": {
        "introduction": "群友语录 页面，quotations内写入语录，每个都是单独分块，随机颜色",
        "quotations": [
            "初见，可爱，单推，结婚 ———— 昵称",
            "xxx ———— 昵称",
            "xxx ———— 昵称",
        ]
    },
    // 特殊情报 页面
    "information": {
        "introduction": "情报 页面，由于内容自由度过高，请自行修改information.html文件",
        // fieldset标签分块显示内容，以数组显示添加数据
        "fieldset": [
            {
                // 外框的大标题 做为目录 导航用
                "title": "配信情报",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        // 卡片头部小标题
                        "header": "配信时间和地点",
                        // 卡片身体内容
                        "body": "哔哩哔哩~中国时间22点开始，23~24点下播。"
                    },
                    {
                        "header": "生日",
                        // <br>是换行标签
                        "body": "生日：6月6日"
                    },
                    {
                        "header": "直播内容",
                        // <br>是换行标签
                        "body": "聊天、唱歌、打游戏（原神）等"
                    },
                    // {
                    //     "header": "舰长达成",
                    //     "body": "x月x日（10舰长）<br>x月x日（50舰长）<br>x月x日（100舰长）"
                    // },
                ]
            },
            {
                // 外框的大标题 做为目录 导航用
                "title": "吃喝相关",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        // 卡片头部小标题
                        "header": "喜欢的食物",
                        // 卡片身体内容
                        "body": "喜欢吃dd"
                    },
                    {
                        // 卡片头部小标题
                        "header": "喜欢的饮品",
                        // 卡片身体内容
                        "body": "白开水"
                    }
                ]
            },
            {
                // 外框的大标题 做为目录 导航用
                "title": "喜欢的事物",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        // 卡片头部小标题
                        "header": "喜欢的游戏",
                        // 卡片身体内容
                        "body": "宝可梦(又可爱，看起来又好吃)"
                    },
                    {
                        // 卡片头部小标题
                        "header": "喜欢的动画和音乐",
                        // 卡片身体内容
                        "body": "多的数不清啦"
                    },
                    {
                        // 卡片头部小标题
                        "header": "其他喜欢的音乐",
                        // 卡片身体内容
                        "body": "摇滚"
                    }
                ]
            },
            // {
            //     // 外框的大标题 做为目录 导航用
            //     "title": "注意事项",
            //     // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
            //     "card": [
            //         {
            //             "header": "雷区",
            //             "body": "不应该做的某些事<br>多喝热水"
            //         }
            //     ]
            // },
            // {
            //     // 外框的大标题 做为目录 导航用
            //     "title": "其他平台账号",
            //     // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
            //     "card": [
            //         {
            //             "header": "油管",
            //             "body": "<a href='https://www.baidu.com' target='_blank'>比如插入个链接，注意单双引号，可以这样转义字符\"这样就可以了\"</a>"
            //         },
            //         {
            //             "header": "推特",
            //             "body": "<a href='https://www.baidu.com' target='_blank'>自由发挥</a>"
            //         }
            //     ]
            // }
        ]
    },
    // 直播封面 页面
    "liveCover": {
        "introduction": "直播封面 页面，img_num填写图片数量，图片必须存放在项目img/live_cover路径下且是png格式的图片（命名从1依次加1，倒排），不然无法识别。当然你也可以改源码为表情包页面的形式",
        // 这里的实现方式是for循环，所以只需要数字，如果命名不一样或者格式不一样，可以修改源码为 表情包的形式加载
        "img_num": 2
    },
    // 特典页面
    "privilege": {
        // 描述可以嵌入html代码
        "introductionCH": "梅芙通信，通过b站私信的方式发送~",
        "introductionJP": "メイフ通信、ピッピッピッと私信で送信されます~",
        "introductionEN": "Meifu communication, sent through private message on bilibili~",
        "captain_img": "img/emoticon/13.jpg"
    },
    // QQ群页面
    "qqGroup": {
        "introductionCH": "<h1>粉丝群，梅芙本人也在哦~</h1>",
        "introductionJP": "日文版",
        "introductionEN": "英文版",
        "captain_img": "img/group/captain.png",
        "fans_img": "img/group/fans.png"
    }
};