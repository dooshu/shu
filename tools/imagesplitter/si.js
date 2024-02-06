
var x = [];
var xx = [];
var y = [];
var yy = [];
var dataURL = [];
var dataURLpng = [];
const INITIALCOUNT=0;
var countinit = 0
const jeeow = 0
var filecount;
var rowcount;
var columncount;
var imagePieces = [];
var zip = new JSZip();
$('#display')['hide']();
$('#finalphoto')['hide']();
var input = $('input[name="files"]')['fileuploader']({
    enableApi: !0,
    fileMaxSize: 20,
    extensions: ['jpeg', 'jpg', 'png', 'webp'],
    changeInput: ' <div class="image-upload text-center"> <label for="inputImage" title="Upload image file"> <input type="file" class="sr-only btn btn-dark" id="inputImage" name="files" accept="image/jpeg, image/png, image/bmp, image/webp, image/svg, image/ico, image/jpg, image/gif"> <a class="btn btn-dark text-white font-weight-bold" > <span class="fa fa-upload"></span> UPLOAD IMAGE</a> </label> </div> <div class="img-container" id="imagecontainer"> <img src="image.jpg" id="image"> </div>',
    thumbnails: {
        startImageRenderer: !0,
        canvasImage: !0,
        onImageLoaded: function (_extension, _0x3743x2d, _0x3743x2e, _0x3743x2f, _0x3743x30) {
            $('#image')['hide']();
            $('#display')['hide']();
            $('#option')['val']('1');
            $('#photobutton')['show']();
            imagecheck = 1;
            $('#split')['prop']('disabled', 0);
            $('#downloadpng')['prop']('disabled', 0);
            $('#downloadjpg')['prop']('disabled', 0);
            extension = _extension['extension'];
            fabricextn = extension;
            canvasextn = 'image/' + extension;
            if (extension == 'jpg') {
                canvasextn = 'image/jpeg';
                fabricextn = 'jpeg'
            };
            imgname = _extension['name'];
            imgname = imgname['split']('.')['slice'](0, -1)['join']('.');
            imgname = imgname + '-split';
            direction = 0;
            canvas1 = _extension['image']['find']('canvas')['get'](0);
            originalwidth = _extension['reader']['width'];
            originalheight = _extension['reader']['height'];
            duplicatewidth = canvas1['width'];
            duplicateheight = canvas1['height'];
            zoom = duplicatewidth / originalwidth;
            unzoom = 1 / zoom;
            ctx = canvas1['getContext']('2d');
            canvas2 = document['createElement']('canvas');
            context = canvas2['getContext']('2d');
            canvas3 = window['_canvas'] = new fabric.Canvas('canvas2');
            canvas3['setWidth'](_extension['reader']['width']);
            canvas3['setHeight'](_extension['reader']['height']);
            canvas3['setBackgroundImage'](_extension['reader']['src'], canvas3['renderAll']['bind'](canvas3), {});
            canvas = this['__canvas'] = new fabric.Canvas(canvas1);
            canvas['setWidth'](_extension['reader']['width']);
            canvas['setHeight'](_extension['reader']['height']);
            canvas['setBackgroundImage'](_extension['reader']['src'], canvas['renderAll']['bind'](canvas), {});
            canvas['setZoom'](canvas['getZoom']() * zoom);
            canvas['setWidth'](_extension['reader']['width'] * zoom);
            canvas['setHeight'](_extension['reader']['height'] * zoom);
            var line = new fabric.Line([originalwidth / 2, -1, originalwidth / 2, originalheight], {
                strokeWidth: originalwidth * 0.005,
                stroke: 'red',
                lockScalingY: true,
                lockScalingX: true,
                hasRotatingPoint: false,
                lockSkewingX: true,
                lockSkewingY: true,
                lockMovementY: true,
                hasControls: false,
                borderColor: 'red'
            });
            canvas['add'](line);
            image = new Image();
            image['src'] = _extension['reader']['src']
        }
    },
    // onRemove: function (_extension) {
    //     $['post']('ajax_remove_file.php', {
    //         file: _extension['name']
    //     })
    // },
    beforeSelect: function (_extension, _0x3743x2d, _0x3743x2e, _0x3743x2f, input) {
        var _0x3743x31 = $['fileuploader']['getInstance'](input);
        if (_0x3743x31['getFiles']()['length']) {
            _0x3743x31['getFiles']()[0]['remove']();
            $('#results')['html']('')
        };
        return !0
    },
    afterSelect: function (_extension, _0x3743x2d, _0x3743x2e, _0x3743x2f, input) {}
});

function formatBytes(_0x3743x33, _0x3743x34 = 2) {
    if (0 === _0x3743x33) {
        return '0 Bytes'
    };
    const _0x3743x35 = 0 > _0x3743x34 ? 0 : _0x3743x34,
    _0x3743x36 = Math['floor'](Math['log'](_0x3743x33) / Math['log'](1024));
    return parseFloat((_0x3743x33 / Math['pow'](1024, _0x3743x36))['toFixed'](_0x3743x35)) + ' ' + ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][_0x3743x36]
}
$('#photobutton')['click'](function () {
    imagePieces = [];
    if (imagecheck > 0) {
        $('#finalphoto')['empty']();
        $('#photobutton')['prop']('disabled', true);
        $('#photobutton')['html']('<i class="fa fa-circle-o-notch fa-spin"></i> Converting..');
        $('#splitimage')['button']('loading');
        $('#resultsection')['empty']();
        $('#resultsection')['hide']();
        xx['length'] = 0;
        yy['length'] = 0;
        x['length'] = 0;
        y['length'] = 0;
        dataURLpng['length'] = 0;
        setTimeout(function () {
            var _0x3743x37 = canvas['getObjects']()['length'];
            var _0x3743x38 = canvas['getObjects']();
            var _0x3743x39;
            if (direction == 1) {
                for (_0x3743x39 = 0; _0x3743x39 < _0x3743x37; _0x3743x39++) {
                    y[_0x3743x39] = _0x3743x38[_0x3743x39]['top']
                };
                y['sort'](function (_0x3743x33, _0x3743x34) {
                    return _0x3743x33 - _0x3743x34
                })
            } else {
                if (direction == 0) {
                    for (_0x3743x39 = 0; _0x3743x39 < _0x3743x37; _0x3743x39++) {
                        x[_0x3743x39] = _0x3743x38[_0x3743x39]['left']
                    };
                    x['sort'](function (_0x3743x33, _0x3743x34) {
                        return _0x3743x33 - _0x3743x34
                    })
                } else {
                    if (direction == 2) {
                        for (_0x3743x39 = 0; _0x3743x39 < _0x3743x37; _0x3743x39++) {
                            if (_0x3743x38[_0x3743x39]['top'] == -1) {
                                xx['push'](_0x3743x38[_0x3743x39]['left'])
                            }
                        };
                        for (_0x3743x39 = 0; _0x3743x39 < _0x3743x37; _0x3743x39++) {
                            if (_0x3743x38[_0x3743x39]['left'] == -1) {
                                yy['push'](_0x3743x38[_0x3743x39]['top'])
                            }
                        };
                        xx['sort'](function (_0x3743x33, _0x3743x34) {
                            return _0x3743x33 - _0x3743x34
                        });
                        yy['sort'](function (_0x3743x33, _0x3743x34) {
                            return _0x3743x33 - _0x3743x34
                        })
                    }
                }
            };
            var _0x3743x3a, _0x3743x3b, _0x3743x3c;
            canvas['deactivateAll']();
            canvas['setWidth'](originalwidth);
            canvas['setHeight'](originalheight);
            canvas['setZoom'](canvas['getZoom']() * unzoom);
            if (direction == 0) {
                for (_0x3743x3a = 0; _0x3743x3a <= x['length']; _0x3743x3a++) {
                    if (_0x3743x3a == 0) {
                        dataURLpng[_0x3743x3a] = canvas3['toDataURL']({
                            format: fabricextn,
                            left: 0,
                            top: 0,
                            width: x[_0x3743x3a] - 0,
                            height: canvas3['height']
                        });
                        _0x3743x3c = x[_0x3743x3a]
                    } else {
                        if (_0x3743x3a == x['length']) {
                            dataURLpng[_0x3743x3a] = canvas3['toDataURL']({
                                format: fabricextn,
                                left: x[_0x3743x3a - 1],
                                top: 0,
                                width: canvas3['width'] - x[_0x3743x3a - 1],
                                height: canvas3['height']
                            });
                            _0x3743x3c = canvas3['width'] - x[_0x3743x3a - 1]
                        } else {
                            dataURLpng[_0x3743x3a] = canvas3['toDataURL']({
                                format: fabricextn,
                                left: x[_0x3743x3a - 1],
                                top: 0,
                                width: x[_0x3743x3a] - x[_0x3743x3a - 1],
                                height: canvas3['height']
                            });
                            _0x3743x3c = x[_0x3743x3a] - x[_0x3743x3a - 1]
                        }
                    };
                    var _0x3743x3d = _0x3743x3c / canvas3['width'] * 100;
                    var _0x3743x3e = $('<div class="box box-widget"><div class="box-header with-border"><h3 class="box-title" style="padding:0px 20px">  <span class="section-header text-center wow zoomIn"><p><b>SPLITTED IMAGE - ' + (_0x3743x3a + 1) + '</b></p></span></br></h3></div><div class="box-footer clearfix"><div class="container"> <img id="downloadimage" src=' + dataURLpng[_0x3743x3a] + ' style="max-width:' + _0x3743x3d + '%;" src="" /></div> <div class="col-md-12"><div class="col-md-12 text-center mt-4"><a href= ' + dataURLpng[_0x3743x3a] + '  class="btn btn-success font-weight-bold" onclick="downloadpng(' + _0x3743x3a + ')"> <i class="fa fa-download"></i> DOWNLOAD IMAGE</a></div></div></div></div>');
                    $('#finalphoto')['append'](_0x3743x3e);
                    $('#finalphoto')['show']()
                }
            };
            if (direction == 1) {
                for (_0x3743x3a = 0; _0x3743x3a <= y['length']; _0x3743x3a++) {
                    if (_0x3743x3a == 0) {
                        dataURLpng[_0x3743x3a] = canvas3['toDataURL']({
                            format: fabricextn,
                            left: 0,
                            top: 0,
                            width: canvas3['width'],
                            height: y[_0x3743x3a] - 0
                        })
                    } else {
                        if (_0x3743x3a == y['length']) {
                            dataURLpng[_0x3743x3a] = canvas3['toDataURL']({
                                format: fabricextn,
                                left: 0,
                                top: y[_0x3743x3a - 1],
                                width: canvas3['width'],
                                height: canvas3['height'] - y[_0x3743x3a - 1]
                            })
                        } else {
                            dataURLpng[_0x3743x3a] = canvas3['toDataURL']({
                                format: fabricextn,
                                left: 0,
                                top: y[_0x3743x3a - 1],
                                width: canvas3['width'],
                                height: y[_0x3743x3a] - y[_0x3743x3a - 1]
                            })
                        }
                    };
                    var _0x3743x3e = $('<div class="box box-widget"><div class="box-header with-border"><h3 class="box-title" style="padding:0px 20px"> <span class="section-header text-center wow zoomIn"><p><b>SPLITTED IMAGE - ' + (_0x3743x3a + 1) + '</b></p></span></br></h3></div><div class="box-footer clearfix"><div class="container"> <img id="downloadimage" src=' + dataURLpng[_0x3743x3a] + ' style="max-width:100%;" src="" /></div> <div class="col-md-12"><div class="col-md-12 text-center mt-4"><a href= ' + dataURLpng[_0x3743x3a] + '  class="btn btn-success font-weight-bold" onclick="downloadpng(' + _0x3743x3a + ')"> <i class="fa fa-download"></i> DOWNLOAD IMAGE</a></div></div></div></div>');
                    $('#finalphoto')['append'](_0x3743x3e);
                    $('#finalphoto')['show']()
                }
            };
            canvas['setWidth'](originalwidth * zoom);
            canvas['setHeight'](originalheight * zoom);
            canvas['setZoom'](canvas['getZoom']() * zoom);
            $('#resultsection')['show']();
            $('#wrkprocess')['button']('reset');
            $('#resultsection')['focus']();
            $('#photobutton')['prop']('disabled', false);
            $('#resultphoto')['attr']('src', dataURL);
            $('#adsid')['hide']();
            $('#finalphoto')['removeClass']('hidden');
            $('#finalphoto')['show']();
            document['getElementById']('finalphoto')['scrollIntoView']();
            $('#photobutton')['html'](`$ {
                'SPLIT IMAGE'
            }`)
        }, 100)
    } else {
        alert('KINDLY ADD IMAGE FIRST')
    }
});

$('#countinit')['on']('change', ()=>{
    countinit = parseInt(document['getElementById']('countinit')['value'])
})

//多维分割
$('#photobutton1')['click'](function () {
    if (imagecheck > 0) {
        $('#finalphoto')['empty']();
        $('#photobutton1')['prop']('disabled', true);
        $('#photobutton1')['html']('<i class="fa fa-circle-o-notch fa-spin"></i> Converting..');
        setTimeout(function () {
            rowcount = document['getElementById']('rows')['value'];
            columncount = document['getElementById']('columns')['value'];
            var _0x3743x3f = originalwidth / rowcount;
            var _0x3743x40 = originalheight / columncount;
            imagePieces['splice'](0, imagePieces['length']);
            
            for (var x = 0; x < rowcount; ++x) {
                for (var y = 0; y < columncount; ++y) {
                    
                    var canvas = document['createElement']('canvas');
                    canvas['width'] = _0x3743x3f;
                    canvas['height'] = _0x3743x40;
                    var context = canvas['getContext']('2d');
                    context['drawImage'](image, x * _0x3743x3f, y * _0x3743x40, _0x3743x3f, _0x3743x40, 0, 0, canvas['width'], canvas['height']);
                    var _filesurname = String(999) + x.toString().padStart(3, '0') + (y*2+countinit).toString().padStart(3, '0');
                    imagePieces[_filesurname] = canvas['toDataURL'](canvasextn)
                }
            };
            var _0x3743x43 = '';
            var _0x3743x3e = $('<div class="box box-widget"><div class="box-header with-border"><h3 class="box-title" style="padding:0px 20px"> <span class="section-header text-center wow zoomIn"><p><b>SPLITTED IMAGE </b></p></span></br></h3></div><div class="box-footer clearfix"><div class="container">');
            
            for (var y = 0; y < columncount; ++y) {
                _0x3743x43 = _0x3743x43 + '<div class="row">';
                for (var x = 0; x < rowcount; ++x) {
                    
                    var _filesurname = String(999) + x.toString().padStart(3, '0') + (y*2+countinit).toString().padStart(3, '0');
                    _0x3743x43 = _0x3743x43 + '<div class="col"><img src=' + imagePieces[_filesurname] + ' style="max-width:100%;" /></div></br>'
                };
                _0x3743x43 = _0x3743x43 + '</div></br>'
            };
            $('#finalphoto')['append'](_0x3743x3e);
            $('#finalphoto')['append'](_0x3743x43);
            $('#finalphoto')['append']('<div class="col-md-12"><div class="col-md-12 text-center mt-4"><a class="btn btn-success font-weight-bold text-white"  onclick="downloadzip()"> <i class="fa fa-download"></i> DOWNLOAD ALL (.ZIP)</a> </div></div></div></div></div>');
            $('#finalphoto')['show']();
            document['getElementById']('finalphoto')['scrollIntoView']();
            $('#photobutton1')['html'](`$ {
                'SPLIT IMAGE'
            }`);
            $('#photobutton1')['prop']('disabled', false)
        }, 100)
    } else {
        alert('Kindly add the image first')
    }
});

// $('#download')['click'](function () {
//     $('#download')['prop']('disabled', true);
//     $('#download')['html']('<i class="fa fa-circle-o-notch fa-spin"></i> Downloading..');
//     setTimeout(function () {
//         if (dataURL) {
//             if (extension) {} else {
//                 extension = 'jpg'
//             };
//             ImageSaver['download_data_uri'](dataURL, '', extension)
//         } else {
//             alert('Kindly add the image first')
//         };
//         $('#download')['prop']('disabled', false);
//         $('#download')['html'](`$ {
//             'DOWNLOAD IMAGE'
//         }`)
//     }, 100)
// });


function downloadzip() {
    var _0x3743x46 = imgname + '.zip';
    zip['remove']('imageonline');
    
    for (var y = 0; y < columncount; ++y) {
        for (var x = 0; x < rowcount; ++x) {
            
            var _filesurname = String(999) + x.toString().padStart(3, '0') + (y*2+countinit).toString().padStart(3, '0')
            
            var _filename =  + _filesurname+ '.' + extension;
            if (extension == 'png') {
                var _0x3743x48 = imagePieces[_filesurname]['replace']('data:image/png;base64,', '')
            } else 
            if (extension == 'jpg') {
                var _0x3743x48 = imagePieces[_filesurname]['replace']('data:image/jpeg;base64,', '')
            } else 
            if (extension == 'jpeg') {
                var _0x3743x48 = imagePieces[_filesurname]['replace']('data:image/jpeg;base64,', '')
            } else 
            if (extension == 'webp') {
                var _0x3743x48 = imagePieces[_filesurname]['replace']('data:image/webp;base64,', '')
            }
            
            zip['folder']('imageonline')['file'](_filename, _0x3743x48, {
                base64: true
            })
        }
    };
    zip['generateAsync']({
        type: 'blob'
    })['then'](function (_0x3743x49) {
        saveAs(_0x3743x49, _0x3743x46)
    })
}

var context;
ImageSaver = {
    download_data_uri: function (_dataimage, _0x3743x4b, _extension) {
        var _0x3743x4d = ImageSaver['make_url_from_data'](_dataimage);
        var _0x3743x33 = document['createElement']('a');
        _0x3743x33['href'] = _0x3743x4d;
        if (imgname) {} else {
            imgname = 'imageonline'
        };
        _0x3743x33['download'] = imgname + '.' + _extension;
        _0x3743x33['click']()
    },
    make_url_from_data: function (_dataimage) {
        var _imageblog = ImageSaver['make_blob'](_dataimage);
        var _0x3743x4d = URL['createObjectURL'](_imageblog);
        return _0x3743x4d
    },
    make_blob: function (_dataimage) {
        var _0x3743x4f;
        if (_dataimage['split'](',')[0]['indexOf']('base64') >= 0) {
            _0x3743x4f = atob(_dataimage['split'](',')[1])
        } else {
            _0x3743x4f = unescape(_dataimage['split'](',')[1])
        };
        var _0x3743x50 = _dataimage['split'](',')[0]['split'](':')[1]['split'](';')[0];
        var _0x3743x51 = new ArrayBuffer(_0x3743x4f['length']);
        var _0x3743x52 = new Uint8Array(_0x3743x51);
        for (var _0x3743x39 = 0; _0x3743x39 < _0x3743x4f['length']; _0x3743x39++) {
            _0x3743x52[_0x3743x39] = _0x3743x4f['charCodeAt'](_0x3743x39)
        };
        return new Blob([_0x3743x51], {
            type: _0x3743x50
        })
    }
};

$('#option')['on']('change', function () {
    if (this['value'] == '1') {
        $('#display')['hide']();
        $('#photobutton')['show']();
        vertical()
    } else {
        if (this['value'] == '2') {
            $('#display')['hide']();
            $('#photobutton')['show']();
            horizontal()
        } else {
            if (this['value'] == '3') {
                $('#display')['show']();
                $('#photobutton')['hide']();
                pieces()
            }
        }
    }
});

function vertical() {
    canvas['clear']();
    direction = 0;
    canvas['add'](new fabric.Line([originalwidth / 1.8, -1, originalwidth / 1.8, originalheight], {
        strokeWidth: originalwidth * 0.005,
        stroke: 'red',
        lockScalingY: true,
        lockScalingX: true,
        hasRotatingPoint: false,
        lockSkewingX: true,
        lockSkewingY: true,
        lockMovementY: true,
        hasControls: false,
        borderColor: 'red'
    }));
    $('#photobutton')['show']()
}

function pieces() {
    canvas['clear']();
    $('#photobutton')['hide']()
}

function horizontal() {
    canvas['clear']();
    direction = 1;
    canvas['add'](new fabric.Line([-1, originalheight / 2, originalwidth, originalheight / 2], {
        strokeWidth: originalheight * 0.005,
        stroke: 'red',
        lockScalingY: true,
        lockScalingX: true,
        hasRotatingPoint: false,
        lockSkewingX: true,
        lockSkewingY: true,
        lockMovementX: true,
        hasControls: false,
        borderColor: 'red'
    }));
    $('#photobutton')['show']()
}

function downloadpng(_0x3743x57) {
    setTimeout(function () {
        ImageSaver['download_data_uri'](dataURLpng[_0x3743x57], '', extension)
    }, 100)
}