import { createI18n } from "vue-i18n";

const messages = {
    en: {
        names: "Ngoc Duy & Natalia",
        hero: {
            invitation_phrase: "You are cordially invited",
            date: "December 21st, 2025",
            time: "Sunday at 17:30",
            venue_name: "HÔTEL du PARC HANOÏ",
            venue_addr: "84 Tran Nhan Tong, Hai Ba Trung, Hanoi",
        },
        time: { days: "Days", hours: "Hours", mins: "Mins", secs: "Secs" },
        couple: {
            title: "The Happy Couple",
            groom: "The Groom",
            bride: "The Bride",
        },
        family: {
            groom_parents_title: "Son of",
            groom_father: "Mr. Nguyen Ngoc Anh",
            groom_mother: "Mrs. Hoang Thi Oanh",
            bride_parents_title: "Daughter of",
            bride_father: "Mr. Miroslaw Sulecki",
            bride_mother: "Mrs. Anna Sulecka",
        },
        venue: {
            title: "The Venue",
            map_link: "View Map",
        },
        schedule: {
            title: "Timeline of Events",
            welcome: "Welcome Guests",
            welcome_time: "17:30",
            welcome_desc: "Cocktails & Canapes",
            ceremony: "Wedding Ceremony",
            ceremony_time: "18:00",
            ceremony_desc: "Exchange of Vows",
            party: "Dinner & Party",
            party_time: "18:30",
            party_desc: "Fine Dining & Celebration",
        },
        dresscode: {
            title: "Dress Code",
            male: "Gentlemen",
            male_dresscode:
                "Suit / Shirt & Trousers\n\nSolid Colors\n\nMinimal Patterns",
            female: "Ladies",
            female_dresscode: "Elegant Dress / Gown\n\nSoft & Gentle Colors",
            no_white: "Please No White",
        },
        rsvp: {
            title: "Confirm Attendance",
            respond_by: "Kindly respond by Dec 1st",
            name: "Your Name",
            count: "Number of guests",
            yes: "Joyfully Accepts",
            no: "Regretfully Declines",
            message: "Message for the couple...",
            button: "Send Response",
            success_msg: "Thank you! We have received your response.",
            name_required: "Name is required",
            attend_status_required:
                "Please select whether you will attend or not",
            count_invalid: "Please enter a valid number (1-20)",
            submit_error: "Failed to submit RSVP. Please try again.",
        },
        gallery: {
            title: "Gallery",
        },
        scroll_to_open: "Scroll down to open",
    },
    vi: {
        names: "Ngọc Duy & Natalia",
        hero: {
            invitation_phrase: "Thân Mời Tới Dự Lễ Thành Hôn",
            date: "21 Tháng 12, 2025",
            time: "Chủ Nhật lúc 17:30",
            venue_name: "HÔTEL du PARC HANOÏ",
            venue_addr: "84 Trần Nhân Tông, Hai Bà Trưng, Hà Nội",
        },
        time: { days: "Ngày", hours: "Giờ", mins: "Phút", secs: "Giây" },
        couple: {
            title: "Cô Dâu & Chú Rể",
            groom: "Chú Rể",
            bride: "Cô Dâu",
        },
        family: {
            groom_parents_title: "Thứ Nam Của",
            groom_father: "Ông Nguyễn Ngọc Anh",
            groom_mother: "Bà Hoàng Thị Oanh",
            bride_parents_title: "Trưởng Nữ Của",
            bride_father: "Ông Miroslaw Sulecki",
            bride_mother: "Bà Anna Sulecka",
        },
        venue: {
            title: "Địa Điểm",
            map_link: "Xem Bản Đồ",
        },
        schedule: {
            title: "Chương Trình",
            welcome: "Đón Khách",
            welcome_time: "17:30",
            welcome_desc: "Tiệc trà & Chụp ảnh",
            ceremony: "Làm Lễ",
            ceremony_time: "18:00",
            ceremony_desc: "Cử hành hôn lễ trang trọng",
            party: "Khai Tiệc",
            party_time: "18:30",
            party_desc: "Dùng tiệc mặn & Chúc mừng",
        },
        dresscode: {
            title: "Trang Phục",
            male: "Nam Giới",
            male_dresscode:
                "SUIT / SƠ MI / QUẦN TÂY LỊCH SỰ\n\nTRƠN MÀU\n\nHẠN CHẾ HOA VĂN",
            female: "Nữ Giới",
            female_dresscode:
                "ĐẦM/ VÁY / QUẦN DÀI THANH LỊCH\n\nMÀU SẮC TRANG NHÃ, NHẸ NHÀNG",
            no_white: "VUI LÒNG KHÔNG MẶC MÀU TRẮNG",
        },
        rsvp: {
            title: "Xác nhận tham dự",
            respond_by: "Phản hồi trước 01/12",
            name: "Tên của bạn",
            count: "Số lượng người tham dự",
            yes: "Sẽ Tham Dự",
            no: "Rất Tiếc Không Thể Tới",
            message: "Lời nhắn gửi...",
            button: "Gửi Xác Nhận",
            success_msg: "Cảm ơn! Chúng tôi đã nhận được phản hồi của bạn.",
            name_required: "Vui lòng nhập tên",
            attend_status_required: "Vui lòng chọn bạn có tham dự hay không.",
            count_invalid: "Vui lòng nhập số hợp lệ (1-20)",
            submit_error: "Gửi RSVP thất bại. Vui lòng thử lại.",
        },
        gallery: {
            title: "Khoảnh Khắc",
            subtitle: "Những hình ảnh kỷ niệm của chúng tôi",
        },
        scroll_to_open: "Cuộn xuống để mở",
    },
};

export default createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});
