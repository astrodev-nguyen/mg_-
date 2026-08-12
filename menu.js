(() => {
  const metadata = {
    vi: {
      title: "Morning Green — Menu nước",
      description:
        "Menu Morning Green gồm 19 sản phẩm với hình ảnh nhãn chai chính thức.",
    },
    en: {
      title: "Morning Green — Drink menu",
      description:
        "Morning Green menu with official bottle-label imagery for all 19 products.",
    },
    zh: {
      title: "Morning Green — 饮品菜单",
      description: "Morning Green 饮品菜单包含 19 款产品及官方瓶身标签图片。",
    },
  };

  const products = [
    {
      code: "S01",
      category: "smoothie",
      status: "coming",
      price: null,
      image: null,
      name: { vi: "Gọn Bụng Nhẹ Tênh", en: "Purely Light", zh: "轻盈清爽" },
      ingredients: {
        vi: "Bó xôi, lê, dưa leo, cần tây, chanh",
        en: "Spinach, pear, cucumber, celery, lime",
        zh: "菠菜、梨、黄瓜、西芹、青柠",
      },
      description: {
        vi: "Bó xôi và lê tạo nền vị xanh dịu; dưa leo, cần tây và chanh mang lại hậu vị thanh, gọn.",
        en: "Spinach and pear create a mellow green base, finished with crisp cucumber, celery, and lime.",
        zh: "菠菜与梨构成柔和的绿色基调，黄瓜、西芹和青柠带来清爽收尾。",
      },
    },
    {
      code: "S02",
      category: "smoothie",
      status: "available",
      price: 55000,
      image: "assets/products/s02-da-sang-dang-gon.webp",
      name: { vi: "Da Sáng Dáng Gọn", en: "Shine & Lean", zh: "清亮轻盈" },
      ingredients: {
        vi: "Bó xôi, dưa leo, dứa, chanh, xoài",
        en: "Spinach, cucumber, pineapple, lime, mango",
        zh: "菠菜、黄瓜、菠萝、青柠、芒果",
      },
      description: {
        vi: "Bó xôi và dưa leo hòa cùng dứa, xoài và chanh, tạo vị nhiệt đới chua ngọt nhẹ.",
        en: "Spinach and cucumber meet pineapple, mango, and lime for a lightly sweet tropical blend.",
        zh: "菠菜、黄瓜搭配菠萝、芒果与青柠，呈现轻盈的热带酸甜风味。",
      },
    },
    {
      code: "S03",
      category: "smoothie",
      status: "available",
      price: 59000,
      image: "assets/products/s03-thai-doc-thanh-loc.webp",
      name: { vi: "Thải Độc Thanh Lọc", en: "Deep Cleanse", zh: "清新绿饮" },
      ingredients: {
        vi: "Bó xôi, táo, cần tây, chanh, ngò tây, gừng",
        en: "Spinach, apple, celery, lime, parsley, ginger",
        zh: "菠菜、苹果、西芹、青柠、欧芹、姜",
      },
      description: {
        vi: "Táo làm dịu vị bó xôi và cần tây; chanh, ngò tây cùng gừng tạo điểm nhấn thơm, tươi.",
        en: "Apple softens the spinach and celery, while lime, parsley, and ginger add a fresh aromatic finish.",
        zh: "苹果柔化菠菜与西芹的绿色风味，青柠、欧芹和姜带来清新香气。",
      },
    },
    {
      code: "S04",
      category: "smoothie",
      status: "available",
      price: 52000,
      image: "assets/products/s04-eo-thon-cuc-chill.webp",
      name: { vi: "Eo Thon Cực Chill", en: "Slim & Chill", zh: "轻盈悠享" },
      ingredients: {
        vi: "Ổi, táo, chanh, hạt chia, dưa leo, bó xôi",
        en: "Guava, apple, lime, chia seeds, cucumber, spinach",
        zh: "番石榴、苹果、青柠、奇亚籽、黄瓜、菠菜",
      },
      description: {
        vi: "Ổi và táo cho vị trái cây rõ nét; dưa leo, bó xôi, chanh và hạt chia tạo kết cấu tươi, nhẹ.",
        en: "Guava and apple lead the flavor, balanced by cucumber, spinach, lime, and chia seeds.",
        zh: "番石榴与苹果带来鲜明果香，黄瓜、菠菜、青柠和奇亚籽使口感清爽轻盈。",
      },
    },
    {
      code: "S05",
      category: "smoothie",
      status: "available",
      price: 55000,
      image: "assets/products/s05-no-lau-ben-bi.webp",
      name: { vi: "No Lâu Bền Bỉ", en: "Power Fuel", zh: "醇厚能量" },
      ingredients: {
        vi: "Bó xôi, sữa đậu nành, chuối, bơ, bột quế, mật ong",
        en: "Spinach, soy milk, banana, avocado, cinnamon, honey",
        zh: "菠菜、豆浆、香蕉、牛油果、肉桂、蜂蜜",
      },
      description: {
        vi: "Chuối, bơ và sữa đậu nành tạo độ sánh mịn; quế và mật ong hoàn thiện hương vị ấm, dịu.",
        en: "Banana, avocado, and soy milk create a creamy texture, rounded with cinnamon and honey.",
        zh: "香蕉、牛油果与豆浆带来绵密口感，肉桂和蜂蜜增添温和香气。",
      },
    },
    {
      code: "S06",
      category: "smoothie",
      status: "available",
      price: 62000,
      image: "assets/products/s06-no-lanh-thanh-dang.webp",
      name: { vi: "No Lành Thanh Dáng", en: "Clean Blend", zh: "清爽醇饮" },
      ingredients: {
        vi: "Bó xôi, sữa đậu nành, táo, bơ, hạt lanh",
        en: "Spinach, soy milk, apple, avocado, flaxseed",
        zh: "菠菜、豆浆、苹果、牛油果、亚麻籽",
      },
      description: {
        vi: "Táo làm sáng vị bó xôi, trong khi bơ, sữa đậu nành và hạt lanh tạo kết cấu sánh dịu.",
        en: "Apple brightens the spinach, while avocado, soy milk, and flaxseed make the blend softly creamy.",
        zh: "苹果提亮菠菜风味，牛油果、豆浆与亚麻籽带来柔和绵密的口感。",
      },
    },
    {
      code: "S07",
      category: "smoothie",
      status: "available",
      price: 55000,
      image: "assets/products/s07-ben-suc-ton-dang.webp",
      name: { vi: "Bền Sức Tôn Dáng", en: "Active Tone", zh: "活力轻盈" },
      ingredients: {
        vi: "Bó xôi, sữa đậu nành, xoài, bơ, bí ngòi, hạt lanh",
        en: "Spinach, soy milk, mango, avocado, zucchini, flaxseed",
        zh: "菠菜、豆浆、芒果、牛油果、西葫芦、亚麻籽",
      },
      description: {
        vi: "Xoài và bơ mang đến vị béo ngọt dịu; bó xôi, bí ngòi, sữa đậu nành và hạt lanh cân bằng tổng thể.",
        en: "Mango and avocado bring mellow richness, balanced by spinach, zucchini, soy milk, and flaxseed.",
        zh: "芒果与牛油果带来柔和醇厚感，菠菜、西葫芦、豆浆和亚麻籽使整体更平衡。",
      },
    },
    {
      code: "S08",
      category: "smoothie",
      status: "available",
      price: 58000,
      image: "assets/products/s08-tra-xanh-thanh-loc.webp",
      name: { vi: "Trà Xanh Thanh Lọc", en: "Green Tea Refresh", zh: "绿茶清爽" },
      ingredients: {
        vi: "Bó xôi, trà xanh, dứa, táo, dưa leo, cần tây, bạc hà",
        en: "Spinach, green tea, pineapple, apple, cucumber, celery, mint",
        zh: "菠菜、绿茶、菠萝、苹果、黄瓜、西芹、薄荷",
      },
      description: {
        vi: "Trà xanh và bạc hà tạo hương thơm mát, cân bằng bởi dứa, táo cùng nhóm rau xanh.",
        en: "Green tea and mint bring a cool aroma, balanced by pineapple, apple, and crisp green vegetables.",
        zh: "绿茶与薄荷带来清凉香气，菠萝、苹果和绿色蔬菜让风味更平衡。",
      },
    },
    {
      code: "S09",
      category: "smoothie",
      status: "available",
      price: 49000,
      image: "assets/products/s09-hong-hao-rang-ro.webp",
      name: { vi: "Hồng Hào Rạng Rỡ", en: "Rosy Radiance", zh: "莓果焕彩" },
      ingredients: {
        vi: "Dâu tây, chuối, củ dền, sữa chua, sữa đậu nành",
        en: "Strawberry, banana, beetroot, yogurt, soy milk",
        zh: "草莓、香蕉、甜菜根、酸奶、豆浆",
      },
      description: {
        vi: "Dâu tây và củ dền tạo sắc vị nổi bật; chuối, sữa chua và sữa đậu nành làm tổng thể mềm, mịn.",
        en: "Strawberry and beetroot lead the flavor, softened by banana, yogurt, and soy milk.",
        zh: "草莓与甜菜根带来鲜明风味，香蕉、酸奶和豆浆让口感更柔滑。",
      },
    },
    {
      code: "S10",
      category: "smoothie",
      status: "available",
      price: 52000,
      image: "assets/products/s10-toa-sang-xuat-than.webp",
      name: { vi: "Tỏa Sáng Xuất Thần", en: "Golden Glow", zh: "金色焕亮" },
      ingredients: {
        vi: "Cà rốt, khoai lang, xoài, cam, hạt lanh, gừng",
        en: "Carrot, sweet potato, mango, orange, flaxseed, ginger",
        zh: "胡萝卜、红薯、芒果、橙子、亚麻籽、姜",
      },
      description: {
        vi: "Cà rốt, khoai lang và xoài cho vị ngọt dịu; cam và gừng tạo hậu vị tươi, ấm nhẹ.",
        en: "Carrot, sweet potato, and mango bring mellow sweetness, lifted by orange and a touch of ginger.",
        zh: "胡萝卜、红薯和芒果带来柔和甜味，橙子与姜增添清新温暖的收尾。",
      },
    },
    {
      code: "S11",
      category: "smoothie",
      status: "available",
      price: 59000,
      image: "assets/products/s11-da-muot-min-mang.webp",
      name: { vi: "Da Mướt Mịn Màng", en: "Aqua Dew", zh: "水润柔滑" },
      ingredients: {
        vi: "Nước dừa, xoài, dứa, dưa leo, chanh, bạc hà, hạt chia",
        en: "Coconut water, mango, pineapple, cucumber, lime, mint, chia seeds",
        zh: "椰子水、芒果、菠萝、黄瓜、青柠、薄荷、奇亚籽",
      },
      description: {
        vi: "Nước dừa, dưa leo và bạc hà tạo cảm giác thanh mát; xoài, dứa, chanh và hạt chia làm vị thêm đầy đặn.",
        en: "Coconut water, cucumber, and mint feel crisp and light, rounded by mango, pineapple, lime, and chia.",
        zh: "椰子水、黄瓜与薄荷清爽轻盈，芒果、菠萝、青柠和奇亚籽让风味更完整。",
      },
    },
    {
      code: "S12",
      category: "smoothie",
      status: "coming",
      price: null,
      image: null,
      name: { vi: "Dưỡng Dáng Êm Bụng", en: "Calm & Shape", zh: "温和轻盈" },
      ingredients: {
        vi: "Sữa yến mạch, sữa chua, xoài, chuối, bí ngòi, hạt chia",
        en: "Oat milk, yogurt, mango, banana, zucchini, chia seeds",
        zh: "燕麦奶、酸奶、芒果、香蕉、西葫芦、奇亚籽",
      },
      description: {
        vi: "Sữa yến mạch và sữa chua tạo nền vị dịu; xoài, chuối, bí ngòi và hạt chia mang lại kết cấu sánh mịn.",
        en: "Oat milk and yogurt form a mellow base, with mango, banana, zucchini, and chia for a smooth texture.",
        zh: "燕麦奶与酸奶构成温和基底，芒果、香蕉、西葫芦和奇亚籽带来绵密口感。",
      },
    },
    {
      code: "J01",
      category: "juice",
      status: "available",
      price: 42000,
      image: "assets/products/j01-dang-thon-cuc-pham.webp",
      name: { vi: "Dáng Thon Cực Phẩm", en: "Green Queen", zh: "绿意轻盈" },
      ingredients: {
        vi: "Thơm, ổi, bó xôi",
        en: "Pineapple, guava, spinach",
        zh: "菠萝、番石榴、菠菜",
      },
      description: {
        vi: "Thơm và ổi mang vị chua ngọt nhiệt đới, hòa cùng bó xôi cho hậu vị xanh nhẹ.",
        en: "Pineapple and guava bring tropical sweet-tart flavor, balanced by a gentle spinach finish.",
        zh: "菠萝与番石榴带来热带酸甜果香，菠菜增添轻柔绿色收尾。",
      },
    },
    {
      code: "J02",
      category: "juice",
      status: "coming",
      price: null,
      image: null,
      name: { vi: "Táo Khoẻ Đẹp Da", en: "Apple Glow", zh: "苹果焕彩" },
      ingredients: {
        vi: "Táo, cam, cà rốt",
        en: "Apple, orange, carrot",
        zh: "苹果、橙子、胡萝卜",
      },
      description: {
        vi: "Táo và cam tạo vị chua ngọt tươi sáng, cân bằng cùng vị ngọt dịu của cà rốt.",
        en: "Apple and orange bring bright sweet-tart flavor, balanced by the mellow sweetness of carrot.",
        zh: "苹果与橙子带来明亮酸甜味，胡萝卜的柔和甜味使整体更平衡。",
      },
    },
    {
      code: "J03",
      category: "juice",
      status: "available",
      price: 45000,
      image: "assets/products/j03-tien-nu-ty-ty.webp",
      name: { vi: "Tiên Nữ Tỷ Tỷ", en: "Golden Fairy", zh: "金色仙子" },
      ingredients: {
        vi: "Cà rốt, cam, nghệ, nước dừa",
        en: "Carrot, orange, turmeric, coconut water",
        zh: "胡萝卜、橙子、姜黄、椰子水",
      },
      description: {
        vi: "Cam và nước dừa làm sáng vị cà rốt; nghệ tạo nốt hương ấm và màu vàng nổi bật.",
        en: "Orange and coconut water brighten the carrot, while turmeric adds a warm note and vivid color.",
        zh: "橙子与椰子水提亮胡萝卜风味，姜黄带来温暖香气与亮丽金色。",
      },
    },
    {
      code: "J04",
      category: "juice",
      status: "coming",
      price: null,
      image: null,
      name: { vi: "Tươi Trẻ Rạng Ngời", en: "Radiant Red", zh: "红润焕彩" },
      ingredients: {
        vi: "Cà rốt, cà chua, củ dền, táo, cần tây, cam",
        en: "Carrot, tomato, beetroot, apple, celery, orange",
        zh: "胡萝卜、西红柿、甜菜根、苹果、西芹、橙子",
      },
      description: {
        vi: "Củ dền, cà chua và cà rốt tạo sắc đỏ đặc trưng; táo, cam và cần tây cân bằng vị chua ngọt.",
        en: "Beetroot, tomato, and carrot create a vivid red blend, balanced by apple, orange, and celery.",
        zh: "甜菜根、西红柿与胡萝卜形成鲜明红色风味，苹果、橙子和西芹使酸甜更平衡。",
      },
    },
    {
      code: "J05",
      category: "juice",
      status: "coming",
      price: null,
      image: null,
      name: { vi: "Sắc Vóc Tuyệt Mỹ", en: "Lean Green Detox", zh: "清绿轻盈" },
      ingredients: {
        vi: "Bó xôi, dưa leo, ổi, cần tây",
        en: "Spinach, cucumber, guava, celery",
        zh: "菠菜、黄瓜、番石榴、西芹",
      },
      description: {
        vi: "Ổi làm dịu nhóm rau xanh gồm bó xôi, dưa leo và cần tây, cho vị thanh, tươi và dễ uống.",
        en: "Guava softens the spinach, cucumber, and celery for a fresh, clean, approachable green blend.",
        zh: "番石榴柔化菠菜、黄瓜与西芹的绿色风味，整体清新爽口。",
      },
    },
    {
      code: "J06",
      category: "juice",
      status: "available",
      price: 49000,
      image: "assets/products/j06-can-tay-thanh-mat.webp",
      name: { vi: "Cần Tây Thanh Mát", en: "Celery Refresh", zh: "西芹清爽" },
      ingredients: {
        vi: "Cần tây, táo, dưa leo",
        en: "Celery, apple, cucumber",
        zh: "西芹、苹果、黄瓜",
      },
      description: {
        vi: "Cần tây và dưa leo mang vị xanh thanh mát, được cân bằng bằng vị ngọt dịu của táo.",
        en: "Celery and cucumber taste crisp and green, balanced by the gentle sweetness of apple.",
        zh: "西芹与黄瓜清新爽口，苹果的柔和甜味使整体更平衡。",
      },
    },
    {
      code: "J07",
      category: "juice",
      status: "available",
      price: 45000,
      image: "assets/products/j07-can-tay-chan-ai.webp",
      name: { vi: "Cần Tây Chân Ái", en: "True Celery", zh: "纯粹西芹" },
      ingredients: {
        vi: "Cần tây",
        en: "Celery",
        zh: "西芹",
      },
      description: {
        vi: "Một lựa chọn nguyên bản với duy nhất cần tây, giữ trọn vị xanh rõ nét và hậu vị thanh.",
        en: "A single-ingredient celery juice with a distinctly green flavor and a crisp finish.",
        zh: "仅用西芹制作，保留鲜明绿色风味与清爽收尾。",
      },
    },
  ];

  // Use the newly supplied source files directly. No product image is
  // re-encoded, cropped, recolored, sharpened, or otherwise pixel-edited.
  // The scale/offset values come from deterministic subject-bound measurements
  // and are applied only by CSS at render time to align visual heights/baselines.
  const updatedProductPresentation = {
    S01: { image: "hinh_san_pham/18_S01_GONBUNGNHETENH.jpg", scale: 0.9525, y: "0.26%" },
    S02: { image: "hinh_san_pham/10_S02_DA SÁNG DÁNG GỌN.jpg", scale: 0.954, y: "-0.14%" },
    S03: { image: "hinh_san_pham/17_S03_ THAI DOC THANH LOC.jpg", scale: 0.9215, y: "1.36%" },
    S04: { image: "hinh_san_pham/2_S04_EO THON CỰC CHILL.jpg", scale: 0.9173, y: "3.20%" },
    S05: { image: "hinh_san_pham/19_S05_NO LÂU BỀN BỈ.jpg", scale: 1.0061, y: "-1.79%" },
    S06: { image: "hinh_san_pham/16_S06_NO LÀNH THANH DÁNG.jpg", scale: 0.9577, y: "1.54%" },
    S07: { image: "hinh_san_pham/5_S07_BEN SUC TON DANG .jpg", scale: 0.8833, y: "1.05%" },
    S08: { image: "hinh_san_pham/7_S08_TRA XANH THANH LOC.jpg", scale: 0.9809, y: "-1.79%" },
    S09: { image: "hinh_san_pham/13_S09_HỒNG HÀO RẠNG RỠ.jpg", scale: 0.9777, y: "-1.71%" },
    S10: { image: "hinh_san_pham/11_S10_TOẢ SÁNG XUẤT THẦN.jpg", scale: 0.9913, y: "-0.16%" },
    S11: { image: "hinh_san_pham/6_S11_DA MƯỚT MỊN MÀNG.jpg", scale: 0.9371, y: "-0.91%" },
    S12: { image: "hinh_san_pham/S12_DUONG DANG EM BUNG.png", scale: 0.9537, y: "-0.93%" },
    J01: { image: "hinh_san_pham/8_J01_DÁNG THON CỰC PHẨM.jpg", scale: 1.0027, y: "-1.50%" },
    J02: { image: "hinh_san_pham/J01_TAO KHOE DEP DA.png", scale: 1.0108, y: "-0.34%" },
    J03: { image: "hinh_san_pham/J03_TIÊN NỮ TỶ TỶ.png", scale: 0.9723, y: "-1.32%" },
    J04: { image: "hinh_san_pham/3_J04_TƯƠI TRẺ RẠNG NGỜI.jpg", scale: 0.957, y: "-0.28%" },
    J05: { image: "hinh_san_pham/4_SAC VOC TUYET MY.jpg", scale: 0.9436, y: "0.79%" },
    J06: { image: "hinh_san_pham/J06_CẦN TÂY THANH MÁT.png", scale: 0.9349, y: "-0.36%" },
    J07: { image: "hinh_san_pham/14_Cần tây chân ái.jpg", scale: 0.9723, y: "0.76%" },
  };

  const productGoals = {
    S01: ["shape", "cleanse", "refresh"],
    S02: ["shape", "beauty", "refresh"],
    S03: ["cleanse", "refresh"],
    S04: ["shape", "refresh"],
    S05: ["energy"],
    S06: ["shape"],
    S07: ["shape", "energy"],
    S08: ["cleanse", "refresh"],
    S09: ["beauty", "energy"],
    S10: ["beauty", "energy"],
    S11: ["beauty", "refresh"],
    S12: ["shape", "energy"],
    J01: ["shape", "refresh"],
    J02: ["beauty"],
    J03: ["beauty", "energy"],
    J04: ["beauty"],
    J05: ["shape", "beauty", "cleanse", "refresh"],
    J06: ["cleanse", "refresh"],
    J07: ["cleanse", "refresh"],
  };

  products.forEach((product) => {
    const presentation = updatedProductPresentation[product.code];
    if (!presentation) {
      return;
    }

    product.image = presentation.image;
    product.status = "available";
    product.displayScale = presentation.scale;
    product.displayY = presentation.y;
    product.goals = productGoals[product.code] ?? [];
  });

  const categoryLabels = {
    smoothie: { vi: "Sinh tố", en: "Smoothie", zh: "果蔬昔" },
    juice: { vi: "Nước ép", en: "Juice", zh: "鲜榨果蔬汁" },
  };

  const statusLabels = {
    vi: "Sắp ra mắt",
    en: "Coming soon",
    zh: "即将推出",
  };

  const ingredientsLabels = {
    vi: "Thành phần",
    en: "Ingredients",
    zh: "配料",
  };

  const detailsLabelPrefixes = {
    vi: "Xem chi tiết",
    en: "View details for",
    zh: "查看详情",
  };

  const notes = {
    available: {
      vi: "Dung tích 330 ml · Lắc đều trước khi uống · Bảo quản lạnh 0–4°C · Dùng trong 24 giờ sau khi mở.",
      en: "330 ml · Shake well before use · Keep refrigerated at 0–4°C · Best within 24 hours of opening.",
      zh: "330 毫升 · 饮用前摇匀 · 0–4°C 冷藏 · 开封后 24 小时内饮用为佳。",
    },
    coming: {
      vi: "Sản phẩm đang chuẩn bị ra mắt. Ảnh placeholder được dùng tạm; ngày bán và giá sẽ được cập nhật sau.",
      en: "This product is being prepared for launch. A temporary placeholder is shown; availability and price will be updated later.",
      zh: "该产品正在筹备上市，当前显示临时占位图；开售日期与价格将稍后更新。",
    },
  };

  const primaryActionLabels = {
    available: {
      vi: "Hỏi món này qua Zalo",
      en: "Ask about this drink on Zalo",
      zh: "通过 Zalo 咨询这款饮品",
    },
    coming: {
      vi: "Nhận thông báo qua Zalo",
      en: "Get launch updates on Zalo",
      zh: "通过 Zalo 获取上市通知",
    },
  };

  const resultLabels = {
    vi: (count) => `${count} sản phẩm phù hợp`,
    en: (count) => `${count} matching ${count === 1 ? "product" : "products"}`,
    zh: (count) => `${count} 款符合条件的产品`,
  };

  const groupCountLabels = {
    vi: (count) => `${count} sản phẩm`,
    en: (count) => `${count} ${count === 1 ? "product" : "products"}`,
    zh: (count) => `${count} 款产品`,
  };

  const sortButtons = document.querySelectorAll(".menu-sort-button");
  const categoryFilterButtons = document.querySelectorAll("[data-category-filter]");
  const goalFilterButtons = document.querySelectorAll("[data-goal-filter]");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const smoothieList = document.querySelector("#smoothie-list");
  const juiceList = document.querySelector("#juice-list");
  const smoothieGroup = document.querySelector("#smoothie-group");
  const juiceGroup = document.querySelector("#juice-group");
  const smoothieCount = document.querySelector("#smoothie-count");
  const juiceCount = document.querySelector("#juice-count");
  const filterStatus = document.querySelector("#menu-filter-status");
  const filterEmpty = document.querySelector("#menu-empty");
  const filterReset = document.querySelector("#menu-filter-reset");
  const backToTop = document.querySelector("#back-to-top");
  const productDialog = document.querySelector("#product-dialog");
  const productDialogImage = document.querySelector("#product-dialog-image");
  const productDialogCategory = document.querySelector("#product-dialog-category");
  const productDialogCode = document.querySelector("#product-dialog-code");
  const productDialogName = document.querySelector("#product-dialog-name");

  const productDialogDescription = document.querySelector("#product-dialog-description");
  const productDialogIngredientsLabel = document.querySelector(
    "#product-dialog-ingredients-label",
  );
  const productDialogIngredients = document.querySelector("#product-dialog-ingredients");
  const productDialogNote = document.querySelector("#product-dialog-note");
  const productDialogPrimary = document.querySelector("#product-dialog-primary");
  const dialogCloseButtons = document.querySelectorAll("[data-dialog-close]");
  const year = document.querySelector("#year");
  let currentLanguage = window.MorningGreenCommon?.getLanguage() ?? "vi";
  let activeSort = "newest";
  let activeCategory = "all";
  let activeGoal = "all";
  let activeProduct = null;
  let lastDetailsButton = null;

  const appendLocalizedText = (parent, values) => {
    ["vi", "en", "zh"].forEach((language) => {
      const span = document.createElement("span");
      span.className = "lang-" + language;
      span.textContent = values[language];

      if (language === "en") {
        span.lang = "en";
      }

      if (language === "zh") {
        span.lang = "zh-Hans";
      }

      parent.append(span);
    });
  };

  const createProductCard = (product, originalOrder) => {
    const item = document.createElement("li");
    item.dataset.productCode = product.code;
    item.dataset.category = product.category;
    item.dataset.status = product.status;
    item.dataset.goals = product.goals.join(" ");
    item.dataset.originalOrder = String(originalOrder);
    item.classList.toggle("is-coming-soon", product.status === "coming");

    const media = document.createElement("div");
    media.className = "menu-card-media";

    const image = document.createElement("img");
    image.className = "menu-item-image";
    image.src = product.image
      ? `${product.image}?v=${product.code === "J02" || product.code === "S12" ? "2" : "1"}`
      : "assets/products/coming-soon.svg";
    image.alt = "";
    image.width = 820;
    image.height = 1093;
    image.loading = originalOrder < 4 ? "eager" : "lazy";
    image.decoding = "async";
    image.style.setProperty("--product-scale", String(product.displayScale ?? 1));
    image.style.setProperty("--product-y", product.displayY ?? "0%");
    media.append(image);

    if (product.status === "coming") {
      const statusBadge = document.createElement("span");
      statusBadge.className = "menu-status-badge";
      appendLocalizedText(statusBadge, statusLabels);
      media.append(statusBadge);
    }

    const name = document.createElement("span");
    name.className = "menu-item-name";
    name.dataset.code = product.code;
    appendLocalizedText(name, product.name);

    const detailsButton = document.createElement("button");
    detailsButton.className = "menu-card-open";
    detailsButton.type = "button";
    detailsButton.addEventListener("click", () => openProductDetails(product, detailsButton));

    item.append(media, name, detailsButton);
    return item;
  };

  products.forEach((product, index) => {
    const list = product.category === "smoothie" ? smoothieList : juiceList;
    list?.append(createProductCard(product, index));
  });

  const menuLists = document.querySelectorAll(".menu-list");
  const menuItems = document.querySelectorAll(".menu-list li");

  const getProductForItem = (item) =>
    products.find((product) => product.code === item.dataset.productCode);

  const getItemName = (item) => getProductForItem(item)?.name[currentLanguage] ?? "";

  const setPressedState = (buttons, dataKey, value) => {
    buttons.forEach((button) => {
      const isActive = button.dataset[dataKey] === value;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const applyFilters = () => {
    let totalVisible = 0;
    let smoothieVisible = 0;
    let juiceVisible = 0;

    menuItems.forEach((item) => {
      const categoryMatches = activeCategory === "all" || item.dataset.category === activeCategory;
      const goals = item.dataset.goals.split(" ").filter(Boolean);
      const goalMatches = activeGoal === "all" || goals.includes(activeGoal);
      const isVisible = categoryMatches && goalMatches;

      item.hidden = !isVisible;
      if (!isVisible) return;

      totalVisible += 1;
      if (item.dataset.category === "smoothie") smoothieVisible += 1;
      if (item.dataset.category === "juice") juiceVisible += 1;
    });

    smoothieGroup.hidden = smoothieVisible === 0;
    juiceGroup.hidden = juiceVisible === 0;
    filterEmpty.hidden = totalVisible !== 0;
    filterStatus.textContent = resultLabels[currentLanguage](totalVisible);
    smoothieCount.textContent = groupCountLabels[currentLanguage](smoothieVisible);
    juiceCount.textContent = groupCountLabels[currentLanguage](juiceVisible);
    setPressedState(categoryFilterButtons, "categoryFilter", activeCategory);
    setPressedState(goalFilterButtons, "goalFilter", activeGoal);
  };

  const resetFilters = () => {
    activeCategory = "all";
    activeGoal = "all";
    applyFilters();
  };

  const updateDetailsButtonLabels = () => {
    menuItems.forEach((item) => {
      const button = item.querySelector(".menu-card-open");
      button?.setAttribute(
        "aria-label",
        detailsLabelPrefixes[currentLanguage] + " " + getItemName(item),
      );
    });
  };

  const renderProductDetails = (product) => {
    if (
      !product ||
      !productDialogImage ||
      !productDialogCategory ||
      !productDialogCode ||
      !productDialogName ||
      !productDialogDescription ||
      !productDialogIngredientsLabel ||
      !productDialogIngredients ||
      !productDialogNote ||
      !productDialogPrimary
    ) {
      return;
    }

    const isComing = product.status === "coming";
    const statusText = statusLabels[currentLanguage];

    if (product.image) {
      productDialogImage.src = `${product.image}?v=${product.code === "J02" || product.code === "S12" ? "2" : "1"}`;
    } else {
      productDialogImage.removeAttribute("src");
    }
    productDialogImage.hidden = !product.image;
    productDialogImage.alt = product.name[currentLanguage] + " — Morning Green";
    productDialogImage.style.setProperty("--product-scale", String(product.displayScale ?? 1));
    productDialogImage.style.setProperty("--product-y", product.displayY ?? "0%");
    productDialogCategory.textContent = categoryLabels[product.category][currentLanguage];
    productDialogCode.textContent = product.code + (isComing ? " · " + statusText : "");
    productDialogCode.classList.toggle("is-coming", isComing);
    productDialogName.textContent = product.name[currentLanguage];
    productDialogDescription.textContent = product.description[currentLanguage];
    productDialogIngredientsLabel.textContent = ingredientsLabels[currentLanguage];
    productDialogIngredients.textContent = product.ingredients[currentLanguage];
    productDialogNote.textContent = notes[product.status][currentLanguage];
    productDialogPrimary.textContent =
      `${primaryActionLabels[product.status][currentLanguage]} · ${product.code} ↗`;
    productDialogPrimary.setAttribute(
      "aria-label",
      `${primaryActionLabels[product.status][currentLanguage]}: ${product.code} — ${product.name[currentLanguage]}`,
    );
  };

  function openProductDetails(product, button) {
    if (!productDialog) {
      return;
    }

    activeProduct = product;
    lastDetailsButton = button;
    renderProductDetails(product);

    if (!productDialog.open) {
      if (typeof productDialog.showModal === "function") {
        productDialog.showModal();
      } else {
        productDialog.setAttribute("open", "");
      }
    }

    productDialog.querySelector(".product-dialog-close")?.focus();
  }

  const closeProductDialog = () => {
    if (!productDialog?.open) {
      return;
    }

    if (typeof productDialog.close === "function") {
      productDialog.close();
    } else {
      productDialog.removeAttribute("open");
      lastDetailsButton?.focus();
    }
  };

  const sortMenu = (sort) => {
    activeSort = sort;
    const locale = currentLanguage === "zh" ? "zh-Hans" : currentLanguage;

    menuLists.forEach((list) => {
      const items = Array.from(list.children);

      items.sort((first, second) => {
        if (sort !== "newest") {
          const statusOrder =
            Number(first.dataset.status === "coming") -
            Number(second.dataset.status === "coming");

          if (statusOrder !== 0) {
            return statusOrder;
          }
        }

        if (sort === "name-asc" || sort === "name-desc") {
          const direction = sort === "name-asc" ? 1 : -1;
          return (
            getItemName(first).localeCompare(getItemName(second), locale, {
              sensitivity: "base",
            }) * direction
          );
        }

        return Number(first.dataset.originalOrder) - Number(second.dataset.originalOrder);
      });

      items.forEach((item) => list.append(item));
    });

    sortButtons.forEach((button) => {
      const isActive = button.dataset.sort === sort;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const updateLanguageDependentContent = (language) => {
    const nextLanguage = metadata[language] ? language : "vi";
    currentLanguage = nextLanguage;
    document.title = metadata[nextLanguage].title;
    descriptionMeta?.setAttribute("content", metadata[nextLanguage].description);
    sortMenu(activeSort);
    updateDetailsButtonLabels();
    applyFilters();

    if (productDialog?.open && activeProduct) {
      renderProductDetails(activeProduct);
    }
  };

  document.addEventListener("morninggreen:languagechange", (event) => {
    updateLanguageDependentContent(event.detail.language);
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => sortMenu(button.dataset.sort));
  });

  categoryFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.categoryFilter;
      applyFilters();
    });
  });

  goalFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeGoal = button.dataset.goalFilter;
      applyFilters();
    });
  });

  filterReset?.addEventListener("click", resetFilters);

  const updateBackToTopVisibility = () => {
    backToTop?.classList.toggle("is-visible", window.scrollY > 520);
  };

  backToTop?.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

  dialogCloseButtons.forEach((button) => {
    button.addEventListener("click", closeProductDialog);
  });

  productDialog?.addEventListener("click", (event) => {
    if (event.target === productDialog) {
      closeProductDialog();
    }
  });

  productDialog?.addEventListener("close", () => {
    lastDetailsButton?.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productDialog?.open) {
      event.preventDefault();
      closeProductDialog();
    }
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  updateLanguageDependentContent(currentLanguage);
  updateBackToTopVisibility();
})();
