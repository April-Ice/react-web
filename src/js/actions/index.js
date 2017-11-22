import reflux from 'reflux';
export default reflux.createActions([
    //main
    "hideLeft", //左侧列表是否隐藏，list列表需要用到，如果隐藏给列表加上左侧的加宽
	"wmsAjax",
	"wmsSendAjax",

    "pageElementChange", //TableList 列表点击分页、每页显示多少条时的监听，用来解决点击分页时把默认选中的数据去掉
]);
