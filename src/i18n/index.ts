import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Navigation
    nav: {
      couple: 'D&N',
      home: 'HOME',
      date: 'DATE',
      about: 'ABOUT',
      venue: 'VENUE',
      dresscode: 'DRESSCODE',
      rsvp: 'RSVP',
      gallery: 'GALLERY',
    },
    // Hero Section
    hero: {
      invitation: 'TOGETHER WITH THEIR FAMILIES',
      couple: 'Duy & Natalia',
      date: 'JULY 15, 2026',
      invitationText: 'JOYFULLY INVITE YOU TO CELEBRATE THEIR WEDDING',
      rsvpButton: 'RSVP NOW',
      scrollDown: 'SCROLL DOWN',
      venueDetails: 'VIEW VENUE DETAILS',
      location: 'HANOI, VIETNAM'
    },
    // Date Countdown
    countdown: {
      title: 'COUNTING DOWN TO OUR BIG DAY',
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
      ceremony: 'CEREMONY WILL BE HELD AT 5:30 PM',
      description: 'WE ARE COUNTING THE DAYS UNTIL WE CAN SHARE THIS SPECIAL MOMENT WITH YOU. YOUR PRESENCE WILL MAKE OUR CELEBRATION COMPLETE.'
    },
    // Couple & Families
    couple: {
      title: 'THE COUPLE & FAMILIES',
      subtitle: 'WITH JOYFUL HEARTS',
      bride: {
        name: 'Natalia Sulecka',
        parents: 'DAUGHTER OF MR. AND MRS. NGUYEN VAN MINH OF HO CHI MINH CITY.',
        origin: 'CON GÁI CỦA BÀ ANNA SULECKA TẠI THÀNH PHỐ WARSZAWA, BA LAN',
        description: 'GENTLE, RADIANT, AND KIND-HEARTED, AMELIA BRINGS WARMTH TO EVERY ROOM SHE ENTERS.'
      },
      groom: {
        name: 'Nguyễn Ngọc Duy',
        parents: 'SON OF MR. AND MRS. TRAN QUOC ANH OF HANOI.',
        origin: 'CON TRAI CỦA ÔNG NGUYỄN NGỌC ANH VÀ BÀ HOÀNG THỊ OANH TẠI HÀ NỘI.',
        description: 'THOUGHTFUL AND STEADFAST, DUY IS THE CALM TO NATALIA\'S LAUGHTER.'
      },
      invitation: 'TOGETHER WITH THEIR BELOVED FAMILIES, DUY AND NATALIA JOYFULLY INVITE YOU TO WITNESS THE BEGINNING OF THEIR NEW CHAPTER.'
    },
    // Schedule Section
    schedule: {
      title: 'SCHEDULE OF EVENTS',
      subtitle: 'CELEBRATION TIMELINE',
      description: 'JOIN US FOR A DAY FILLED WITH LOVE, LAUGHTER, AND CHERISHED MOMENTS.',
      morning: {
        time: '9:00 AM',
        event: 'TEA CEREMONY',
        description: 'TRADITIONAL CEREMONY WITH FAMILY AND CLOSE FRIENDS.'
      },
      afternoon: {
        time: '4:00 PM',
        event: 'WEDDING CEREMONY',
        description: 'THE MAIN WEDDING CEREMONY WHERE WE EXCHANGE VOWS.'
      },
      evening: {
        time: '6:00 PM',
        event: 'RECEPTION DINNER',
        description: 'CELEBRATION WITH DINNER, DANCING, AND JOYFUL MOMENTS.'
      }
    },
    // Venue Section
    venue: {
      title: 'VENUE',
      name: 'HÔTEL DU PARC HANOÏ',
      details: 'IN THE BALLROOM ON THE 2ND FLOOR',
      address: '84 TRAN NHAN TONG STREET, NGUYEN DU, HAI BA TRUNG, HANOI',
      map: 'VIEW ON GOOGLE MAPS'
    },
    // Dresscode Section
    dresscode: {
      title: 'DRESSCODE',
      subtitle: 'ELEGANT COASTAL ROMANCE',
      ladies: 'LADIES',
      ladiesDescription: 'LONG DRESSES OR ELEGANT JUMPSUITS IN BLUSH, CHAMPAGNE, DUSTY ROSE, OR SOFT NEUTRALS.',
      gentlemen: 'GENTLEMEN',
      gentlemenDescription: 'LIGHT SUITS OR SMART CASUAL IN BEIGE, SAND, DOVE GREY, OR NAVY.',
      avoid: 'KINDLY AVOID',
      avoidDescription: 'SOLID RED OR BRIGHT NEON TONES. LET THE COUPLE STAND OUT IN WHITE.',
      women: 'WOMEN',
      womenDescription: 'ELEGANT DRESSES/SKIRTS/LONG PANTS IN SOFT, GENTLE COLORS. PLEASE AVOID WHITE.',
      men: 'MEN',
      menDescription: 'SUIT/DRESS SHIRT/DRESS PANTS IN SOLID COLORS, MINIMAL PATTERNS.'
    },
    // Gallery Section
    gallery: {
      title: 'GALLERY',
      subtitle: 'MOMENTS IN FRAMES',
      description: 'A GLIMPSE INTO OUR JOURNEY TOGETHER. THESE ARE SOME OF OUR FAVORITE MEMORIES LEADING UP TO THIS DAY.'
    },
    // RSVP Section
    rsvp: {
      title: 'RSVP',
      subtitle: 'KINDLY RESPOND',
      description: 'PLEASE LET US KNOW IF YOU WILL BE ABLE TO CELEBRATE WITH US. IF YOU CANNOT ATTEND, WE WOULD STILL LOVE TO RECEIVE YOUR WISHES.',
      name: 'FULL NAME *',
      guests: 'NUMBER OF GUESTS *',
      attending: 'JOYFULLY ATTENDING',
      notAttending: 'SADLY CANNOT ATTEND',
      messageOptional: 'MESSAGE (OPTIONAL)',
      messagePlaceholder: 'ANY DIETARY REQUESTS OR NOTES FOR THE COUPLE?',
      wishes: 'SHARE YOUR WISHES',
      wishesPlaceholder: 'SEND YOUR LOVE AND BLESSINGS TO THE COUPLE...',
      submitButton: 'SUBMIT RSVP',
      submitting: 'SUBMITTING...',
      success: 'THANK YOU FOR YOUR RESPONSE. WE HAVE RECORDED YOUR RSVP.',
      error: 'PLEASE FILL IN YOUR NAME, NUMBER OF GUESTS, AND ATTENDANCE.',
      errorGeneric: 'SOMETHING WENT WRONG. PLEASE TRY AGAIN.'
    },
    // Footer
    footer: {
      text: 'DESIGNED WITH LOVE FOR AMELIA & BENJAMIN',
      rights: 'ALL RIGHTS RESERVED'
    }
  },
  vi: {
    // Navigation
    nav: {
      couple: 'D&N',
      home: 'TRANG CHỦ',
      date: 'NGÀY',
      about: 'VỀ CHÚNG TÔI',
      rsvp: 'XÁC NHẬN THAM DỰ',
      venue: 'ĐỊA ĐIỂM',
      dresscode: 'TRANG PHỤC',
      gallery: 'THƯ VIỆN ẢNH',
    },
    // Hero Section
    hero: {
      invitation: 'CÙNG GIA ĐÌNH HAI BÊN',
      couple: 'Duy & Natalia',
      date: '21 THÁNG 12, 2025',
      invitationText: 'TRÂN TRỌNG KÍNH MỜI QUÝ VỊ ĐẾN DỰ LỄ THÀNH HÔN CỦA CHÚNG TÔI',
      rsvpButton: 'XÁC NHẬN THAM DỰ',
      scrollDown: 'KÉO XUỐNG',
      venueDetails: 'XEM CHI TIẾT ĐỊA ĐIỂM',
      location: 'HÀ NỘI, VIỆT NAM'
    },
    // Date Countdown
    countdown: {
      title: 'ĐẾM NGƯỢC ĐẾN NGÀY TRỌNG ĐẠI',
      days: 'NGÀY',
      hours: 'GIỜ',
      minutes: 'PHÚT',
      seconds: 'GIÂY',
      ceremony: 'LỄ THÀNH HÔN SẼ ĐƯỢC TỔ CHỨC VÀO LÚC 5:30 PM',
      description: 'CHÚNG TÔI ĐANG ĐẾM NGƯỢC ĐẾN NGÀY TRỌNG ĐẠI. SỰ HIỆN DIỆN CỦA QUÝ VỊ LÀ NIỀM VUI CỦA CHÚNG TÔI.'
    },
    // Couple & Families
    couple: {
      title: 'CÔ DÂU & CHÚ RỂ CÙNG GIA ĐÌNH',
      subtitle: 'TRÁI TIM NGẬP TRÀN HẠNH PHÚC',
      bride: {
        name: 'Natalia Sulecka',
        parents: 'CON GÁI CỦA BÀ ANNA SULECKA',
        origin: 'ĐẾN TỪ THÀNH PHỐ WARSZAWA, BA LAN',
        description: 'DỊU DÀNG, RẠNG RỠ VÀ TỬ TẾ, NATALIA MANG ĐẾN SỰ ẤM ÁP CHO MỌI CĂN PHÒNG CÔ BƯỚC VÀO.'
      },
      groom: {
        name: 'Nguyễn Ngọc Duy',
        parents: 'CON TRAI CỦA ÔNG NGUYỄN NGỌC ANH VÀ BÀ HOÀNG THỊ OANH',
        origin: 'ĐẾN TỪ HÀ NỘI, VIỆT NAM',
        description: 'SUY NGHĨ SÂU SẮC VÀ KIÊN ĐỊNH, DUY LÀ SỰ BÌNH TĨNH ĐỐI VỚI TIẾNG CƯỜI CỦA NATALIA.'
      },
      invitation: 'CÙNG VỚI GIA ĐÌNH THÂN YÊU, DUY VÀ NATALIA TRÂN TRỌNG KÍNH MỜI QUÝ VỊ CHỨNG KIẾN SỰ KHỞI ĐẦU CỦA CHƯƠNG MỚI TRONG CUỘC ĐỜI HỌ.'
    },
    // Schedule Section
    schedule: {
      title: 'LỊCH TRÌNH SỰ KIỆN',
      subtitle: 'LỊCH TRÌNH LỄ HỘI',
      description: 'HÃY CÙNG CHÚNG TÔI TRONG MỘT NGÀY ĐẦY Ý NGHĨA TÌNH YÊU VÀ NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ.',
      morning: {
        time: '9:00 SÁNG',
        event: 'LỄ TRÀ',
        description: 'LỄ CỔNG TRUYỀN CÙNG GIA ĐÌNH VÀ BẠN BÈ THÂN THIẾT.'
      },
      afternoon: {
        time: '4:00 CHIỀU',
        event: 'LỄ THÀNH HÔN',
        description: 'LỄ THÀNH HÔN CHÍNH NƠI CHÚNG TÔI ĐỔI LỜI THỀ.'
      },
      evening: {
        time: '6:00 TỐI',
        event: 'TIỆC CHÚC MỪNG',
        description: 'TIỆC CHÚC MỪNG VỚI BỮA TỔI, NHẢY MÚA VÀ NHỮNG KHOẢNH KHẮC VUI VẺ.'
      }
    },
    // Venue Section
    venue: {
      title: 'ĐỊA ĐIỂM',
      name: 'HÔTEL DU PARC HANOÏ',
      details: 'TẦNG 2 TẠI SẢNH TIỆC LỚN',
      address: '84 P. TRẦN NHÂN TÔNG, NGUYỄN DU, HAI BÀ TRƯNG, HÀ NỘI',
      map: 'XEM TRÊN GOOGLE MAPS'
    },
    // Dresscode Section
    dresscode: {
      title: 'TRANG PHỤC',
      subtitle: 'THANH LỊCH',
      women: 'NỮ',
      womenDescription: 'ĐẦM/ VÁY / QUẦN DÀI THANH LỊCH\nMÀU SẮC TRANG NHÃ, NHẸ NHÀNG\nVUI LÒNG KHÔNG MẶC MÀU TRẮNG',
      men: 'NAM',
      menDescription: 'SUIT / SƠ MI / QUẦN TÂY LỊCH SỰ\nTRƠN MÀU, HẠN CHẾ HOA VĂN'
    },
    // Gallery Section
    gallery: {
      title: 'THƯ VIỆN ẢNH',
      subtitle: 'KHOẢNH KHẮC TRONG KHUNG HÌNH',
      description: 'MỘT CÁI NHÌN VÀO HÀNH TRÌNH CỦA CHÚNG TÔI. ĐÂY LÀ MỘT SỐ KỶ NIỆM YÊU THÍCH CỦA CHÚNG TÔI DẪN ĐẾN NGÀY NÀY.'
    },
    // RSVP Section
    rsvp: {
      title: 'XÁC NHẬN THAM DỰ',
      subtitle: 'TRÂN TRỌNG PHẢN HỒI',
      description: 'VUI LÒNG CHO CHÚNG TÔI BIẾT LIỆU QUÝ VỊ CÓ THỂ THAM GIA ĂN MỪNG CÙNG CHÚNG TÔI KHÔNG. NẾU QUÝ VỊ KHÔNG THỂ THAM DỰ, CHÚNG TÔI VẪN RẤT MONG NHẬN ĐƯỢC NHỮNG LỜI CHÚC CỦA QUÝ VỊ.',
      name: 'HỌ VÀ TÊN *',
      guests: 'SỐ LƯỢNG KHÁCH *',
      attending: 'VUI VẺ THAM DỰ',
      notAttending: 'TIẾC KHÔNG THỂ THAM DỰ',
      messageOptional: 'TIN NHẮN (TÙY CHỌN)',
      messagePlaceholder: 'YÊU CẦU VỀ THỰC PHẨM HOẶC GHI CHÚ CHO CÔ DÂU CHÚ RỂ?',
      wishes: 'CHIA SẺ LỜI CHÚC',
      wishesPlaceholder: 'GỬI TÌNH YÊU VÀ LỜI CHÚC PHÚC ĐẾN CÔ DÂU CHÚ RỂ...',
      submitButton: 'GỬI XÁC NHẬN',
      submitting: 'ĐANG GỬI...',
      success: 'CẢM ƠN PHẢN HỒI CỦA QUÝ VỊ. CHÚNG TÔI ĐÃ GHI NHẬN XÁC NHẬN THAM DỰ.',
      error: 'VUI LÒNG ĐIỀN HỌ TÊN, SỐ LƯỢNG KHÁCH, VÀ VIỆC THAM DỰ.',
      errorGeneric: 'ĐÃ CÓ LỖI XẢY RA. VUI LÒNG THỬ LẠI.'
    },
    // Footer
    footer: {
      text: 'THIẾT KẾ VỚI TÌNH YÊU CHO AMELIA & BENJAMIN',
      rights: 'BẢN QUYỀN ĐÃ ĐƯỢC BẢO LƯU'
    }
  }
}

// Detect browser language or get from localStorage or URL
const getLocale = () => {
  // Check localStorage first
  const stored = localStorage.getItem('locale')
  if (stored === 'en' || stored === 'vi') {
    return stored
  }

  // Check URL path
  const pathLocale = window.location.pathname.split('/')[1]
  if (pathLocale === 'en' || pathLocale === 'vi') {
    return pathLocale
  }

  // Fall back to browser language
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'vi' ? 'vi' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: 'en',
  messages
})