 // 百度地图API功能
       window.onload=function(){
           var map = new BMap.Map("mymap");

        map.centerAndZoom(new BMap.Point(108.907029, 34.245592),20); 
            setTimeout(function(){
                map.setZoom(14);   
            }, 2000);  //2秒后放大到14级
            // map.centerAndZoom(point, 12);
            // map.enableScrollWheelZoom(true);

        var point = new BMap.Point(108.907029, 34.245592);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中

        var label = new BMap.Label("高新区高新三路8号西高智能大厦508室", {
            offset: new BMap.Size(20, -10)
        });
        // marker.setLabel(label);
       }