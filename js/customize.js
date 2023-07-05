// 自行加入的JS請寫在這裡
$(function () {
  // 收藏
  $('.classification_block .classification_groupright')
    .find('.collect')
    .click(function () {
      $(this).toggleClass('active');
    });
  // 後分類 h3收合
  var _classificationlist = $('.classification_tabs .tabContent .classification_list h3');
  _classificationlist.click(function () {
    $(this).next('ul').slideToggle();
    $(this).toggleClass('close');
    // $(this).parent().siblings().children('ul').stop().slideDown();
    // $(this).parent().siblings().children('h3').removeClass('close');
  });
  //  後分類整個 左右收合
  $('.classification_menu_btn>a').click(function () {
    $('.classification_groupleft').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  //  詳目資訊整個 左右收合
  $('.cp_data_btn>a').click(function () {
    $('.cp_data_left').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  // 限縮依據
  $('.constriction_list ul li .close').click(function () {
    $(this).parent('li').remove();
  });
  //   cp頁左欄
  $('.pic_block').slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  //sticky sidebar
  if ($('.stickySidebar').length > 0) {
    var stickySidebar = new StickySidebar('.stickySidebar', {
      containerSelector: '.main',
      topSpacing: 93,
      bottomSpacing: 0,
      minWidth: 768,
      resizeSensor: true,
    });
  }

  // 會員登入
  $('.login_lightbox').hide();
  $('.member_login_btn button').click(function () {
    $('.login_lightbox').fadeIn();
    $('body').addClass('fixed');
  });
  $('.login_lightbox .close a').click(function () {
    $('.login_lightbox').fadeOut();
    $('body').removeClass('fixed');
  });
  $('.login_lightbox .overlay').click(function () {
    $('.login_lightbox').fadeOut();
    $('body').removeClass('fixed');
  });
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    lazyLoad: 'ondemand',
    useHistoryApi: 'true',
    ease: 'ease',
    lazy: true,
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });

  //氣泡圖
  Highcharts.chart('container', {
    chart: {
      type: 'packedbubble',
      height: '100%',
    },
    title: {
      text: '國際教育訊息2020年關鍵字氣泡圖',
      align: 'left',
    },
    tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}',
    },
    plotOptions: {
      packedbubble: {
        minSize: '20%',
        maxSize: '100%',
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          gravitationalConstant: 0.05,
          splitSeries: true,
          seriesInteraction: false,
          dragBetweenSeries: true,
          parentNodeLimit: true,
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 20,
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal',
          },
        },
      },
    },
    series: [
      {
        name: '美國',
        data: [
          {
            name: '人權教育',
            value: 76,
          },
          {
            name: '紀律不佳學生',
            value: 20,
          },
          {
            name: '政策中心',
            value: 97,
          },
          {
            name: '性別平等教育',
            value: 11,
          },
          {
            name: '參與',
            value: 15,
          },
          {
            name: '學生',
            value: 24,
          },
          {
            name: '運動員',
            value: 24,
          },
          {
            name: '性教育課程',
            value: 29,
          },
          {
            name: '青少年懷孕率',
            value: 32,
          },
          {
            name: '家庭教育',
            value: 178,
          },
          {
            name: '學校體育與衛生教育',
            value: 41,
          },
          {
            name: '公共衛生',
            value: 35,
          },
          {
            name: '系統思考方式',
            value: 33,
          },
          {
            name: '社區公共衛生',
            value: 171,
          },
          {
            name: '應急措施',
            value: 69,
          },
          {
            name: '大學',
            value: 67,
          },
          {
            name: '猴痘',
            value: 59,
          },
          {
            name: '預防',
            value: 54,
          },
          {
            name: '語文教育',
            value: 151,
          },
          {
            name: '加州議員',
            value: 48,
          },
          {
            name: '撥款資助',
            value: 44,
          },
          {
            name: '雙語教師',
            value: 44,
          },
          {
            name: '南金士頓',
            value: 43,
          },
          {
            name: '重新恢復',
            value: 40,
          },
          {
            name: '教學政策',
            value: 40,
          },
          {
            name: '資訊教育',
            value: 34,
          },
          {
            name: '美國調查報告',
            value: 34,
          },
          {
            name: '監控軟體',
            value: 20,
          },
          {
            name: '學生',
            value: 19,
          },
          {
            name: '行動設備',
            value: 16,
          },
          {
            name: '紀律管理',
            value: 12,
          },
          {
            name: '教育經費',
            value: 10,
          },
          {
            name: '削減公校預算案',
            value: 9,
          },
          {
            name: '紐約市府',
            value: 7,
          },
          {
            name: '上訴',
            value: 7,
          },
          {
            name: '教育預算',
            value: 7,
          },
        ],
      },
      {
        name: '韓國',
        data: [
          {
            name: '性別平等教育',
            value: 8,
          },
          {
            name: '性別差距',
            value: 9,
          },
          {
            name: '排行榜',
            value: 13,
          },
          {
            name: '性別差距指數',
            value: 14,
          },
          {
            name: '青少年',
            value: 14,
          },
          {
            name: '兩性',
            value: 17,
          },
          {
            name: '平等的權益',
            value: 24,
          },
          {
            name: '女性家族部',
            value: 25,
          },
          {
            name: '教育部',
            value: 50,
          },
          {
            name: '青春期青少年',
            value: 7,
          },
          {
            name: '數位性剝削',
            value: 60,
          },
          {
            name: '學生事務與輔導',
            value: 8,
          },
          {
            name: '元宇宙',
            value: 9,
          },
          {
            name: '校園暴力',
            value: 93,
          },
          {
            name: '學生運動員',
            value: 392,
          },
          {
            name: '遭受霸凌',
            value: 225,
          },
          {
            name: '實態調查',
            value: 141,
          },
        ],
      },
    ],
  });
  //
});
