export class SiuMap {
    static map;

    static init() {
        this.map = L.map('map', {
            crs: L.CRS.Simple,
            minZoom: -8
        });
        let mapSize = {width: 8192, height: 5500}
        let pxTrans = {dx: -73730, dy: -29880, m: 18}
        let bounds = [
            [pxTrans.dy, pxTrans.dx],
            [
                pxTrans.dy + pxTrans.m * mapSize.height,
                pxTrans.dx + pxTrans.m * mapSize.width
            ]
        ];
        L.imageOverlay('img/map.jpg', bounds).addTo(this.map);
        this.map.fitBounds(bounds);
    }
}