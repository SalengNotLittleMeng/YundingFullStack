Vue.component('cpn1', {
    template: `
        <div>
            <slot name='top'></slot>
            <a href="" class='more' style='margin-left: 500px;'>更多</a>
            <div class='line'></div>
            <slot name='thing'></slot>
        </div>
    `
})
Vue.component('cpn2', {
    template: `
        <div>
            <slot></slot>
        </div>
    `
})
Vue.component('cpn3', {
    template: `
        <div>
            <slot></slot>
        </div>
    `
})
let a = new Vue({
    el: '#app_1',
    data: {
        newCDs: [
            {song: 'I NEVER DIE', singer: '(G)I-DLE', img: 'http://p4.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=100y100'},
            {song: '倒叙的生活', singer: '李易峰', img: 'http://p3.music.126.net/-etIFxw-EYCdOGLRAd8tww==/109951167138088944.jpg?param=100y100'},
            {song: '十三州府', singer: '队长', img: 'http://p3.music.126.net/bD6Mc8u993RcXa16-26XsQ==/109951167138581770.jpg?param=100y100'},
            {song: 'Turning Red(Original)', singer: 'FINNEAS', img: 'http://p1.music.126.net/_o-gbRa53kGYM569z1fkFw==/109951167137339749.jpg?param=130y130'},
            {song: 'Bones', singer: 'Imagine Dragons', img: 'http://p2.music.126.net/qMyyzj5wO9oa9SfRebt6yA==/109951167137953001.jpg?param=130y130'}
        ],
        rise: {
            name: '飙升榜',
            img: 'http://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100',
            songs: [
                {name: '你不是我，我不是我', id: '1'},
                {name: 'Intentionally', id: '2'},
                {name: '独家屏蔽', id: '3'},
                {name: '喜欢你的', id: '4'},
                {name: '爱丫爱丫', id: '5'},
                {name: '千风诗', id: '6'},
                {name: '爱丫爱丫', id: '7'},
                {name: '人间烟火', id: '8'},
                {name: 'Bet On Me', id: '9'},
                {name: '唯一', id: '10'}
            ]
        },
        newsong: {
            name: '新歌榜',
            img: 'http://p4.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=100y100',
            songs: [
                {name: '爱丫爱丫', id: '1'},
                {name: 'Letting Go', id: '2'},
                {name: '匿名的好友', id: '3'},
                {name: '十个字', id: '4'},
                {name: '滚烫', id: '5'},
                {name: 'TOMBOY', id: '6'},
                {name: 'Bet On Me', id: '7'},
                {name: '一滴泪的时间', id: '8'},
                {name: '忘不掉的你（钢琴版）', id: '9'},
                {name: '笑红尘', id: '10'}
            ]
        },
        original: {
            name: '原创榜',
            img: 'http://p4.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=100y100',
            songs: [
                {name: '我才不是若无其事', id: '1'},
                {name: '今天不想回家', id: '2'},
                {name: '小胡同', id: '3'},
                {name: '妳', id: '4'},
                {name: '我的Folykiki', id: '5'},
                {name: '东北喊麦风云', id: '6'},
                {name: '十三州府', id: '7'},
                {name: '夏如白鸟飞', id: '8'},
                {name: '致二十岁的你', id: '9'},
                {name: 'Before Tomorrow', id: '10'}
            ]
        }
    }
})