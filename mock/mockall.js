/**
 * Created by rongtao.lu on 16/03/17
 */

module.exports = {
    rules: [
        {
            pattern: /\/footballSNS\/mock\/list.do\?id=14/,
            respondwith: "./list2.json"
        },
        {
            pattern: /\/footballSNS\/mock\/list.do\?id=13/,
            respondwith: "./list.json"
        },
        {
            pattern: /\/interface\/getList.do/,
            respondwith: "./list.json"
        },
        {
            pattern: /\/interface\/more.do/,
            respondwith: "./more.json"
        },
        {
            pattern: /\/interface\/update.do/,
            respondwith: "./update.json"
        },
        {
            pattern: /\/interface\/postUserInfo.do/,
            respondwith: "./postUserInfo.json"
        }

    ]
};
