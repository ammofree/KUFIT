import { WeatherType, MoodType, ScheduleType, GoodsItem, StylingResult } from "../types";

export function generateLocalStyling(inputs: {
  weather: WeatherType;
  temp: number;
  mood: MoodType;
  schedule: ScheduleType;
  goods: GoodsItem[];
}): StylingResult {
  const { weather, temp, mood, schedule, goods } = inputs;

  let characterName = "참살이길 방랑자";
  let characterDescription = "고려대학교 캠퍼스 어딘가에서 목격되는 정체불명의 패셔니스타.";
  let nickname = "아기호랑이";
  let recommendedOutfit = "고려대 크림색 후드티와 편안한 조거 팬츠.";
  let recommendedColors = ["크림슨 (버건디)", "오프화이트"];
  let recommendedGoods: string[] = [];
  let survivalTips: string[] = [];
  let styleFortune = "생각지도 못한 사람에게 의상 칭찬을 들을 수 있는 날입니다.";

  let styleScore = 75;
  let energyLevel = 60;
  let confidenceLevel = 70;

  if (schedule === "exam") {
    characterName = "시험 전 생존자 (초싸이어인)";
    characterDescription = "카페인 수혈이 시급한 벼락치기 전사. 백주년기념관이나 과학도서관 구석에서 출몰하며, 흐트러진 의상 속에서 세기말 분위기를 풍깁니다.";
    nickname = "백기 야간 총수";
    recommendedOutfit = "회색 오버핏 맨투맨에 편안한 밴딩 슬랙스, 밤샘을 대비한 편한 스니커즈.";
    styleScore = 55;
    energyLevel = 30;
    confidenceLevel = 45;
    survivalTips.push("백기나 과학도서관 열람실은 에어컨/온풍기가 강할 수 있으니 얇은 옷을 레이어드하는 것을 강력 추천합니다.");
    styleFortune = "패션보다는 생존입니다! 하지만 안경과 모자의 톤을 맞춘다면 지적인 생존자가 될 수 있습니다.";
  } else if (schedule === "presentation") {
    characterName = "캠퍼스 발표 마스터 (CEO 에디션)";
    characterDescription = "완벽한 포디움 장악력을 지닌 인간 파워포인트. 정경대 후문이나 국제일류백주년관에서 빛나는 아우라를 뿜어냅니다.";
    nickname = "버건디 프레젠터";
    recommendedOutfit = "단정하게 다듬어진 블레이저 또는 블루 칼라 셔츠, 슬랙스에 로퍼 조합.";
    styleScore = 95;
    energyLevel = 80;
    confidenceLevel = 95;
    survivalTips.push("발표용 포멀 룩에는 단정한 메탈 프레임 안경이나 모던한 숄더백이 전문성을 한층 끌어올립니다.");
    styleFortune = "단정한 블랙 & 크림슨 배색이 공감을 이끌어냅니다. 자신감 넘치는 워킹으로 에이플러스를 쟁취하세요!";
  } else if (schedule === "date") {
    characterName = "참살이길 설렘 사냥꾼";
    characterDescription = "개강 후 핑크빛 기류가 만개한 로맨티시스트. 데이트 코스를 정하느라 휴대폰을 뚫어지게 보고 있습니다.";
    nickname = "참살이 사랑꾼";
    recommendedOutfit = "파스텔 톤 가디건, 연청 크롭 데님 팬츠, 가볍고 세련된 독일군 스니커즈 조합.";
    styleScore = 90;
    energyLevel = 90;
    confidenceLevel = 85;
    survivalTips.push("참살이길 맛집 투어 시 향수가 옷에 고르게 분포되도록 가벼운 린넨 스프레이를 입혀주면 센스 만점!");
    styleFortune = "크림슨 버건디와 아이보리의 우아한 조화가 오늘의 로맨스 지수를 120% 폭발시킵니다.";
  } else if (schedule === "club") {
    characterName = "민주광장 버스킹 리더";
    characterDescription = "친화력 500%를 자랑하는 동아리 회장님. 에코백과 텀블러를 들고 끊임없이 수다를 떨며 동아리방으로 향합니다.";
    nickname = "동아리 영업왕";
    recommendedOutfit = "고려대 과잠, 빈티지 워싱 데님, 뉴발란스 그레이 스니커즈.";
    styleScore = 80;
    energyLevel = 85;
    confidenceLevel = 78;
    survivalTips.push("동아리 활동에는 활동성이 생명! 너무 끼는 하의보다는 트렌디한 와이드 팬츠가 제격입니다.");
    styleFortune = "과잠에 캡모자를 비스듬히 써보세요. 부드러운 카리스마가 당신의 소통 능력을 빛내줄 것입니다.";
  } else if (schedule === "empty") {
    characterName = "공강 우주 비행사";
    characterDescription = "세상 모든 짐을 내려놓은 피크닉 예찬가. 다람쥐길 벤치나 중앙광장 잔디밭에서 햇살을 만끽할 준비가 완료되어 있습니다.";
    nickname = "우주의 공강마스터";
    recommendedOutfit = "버건디 맨투맨에 아주 편안한 하이브리드 반바지, 슬라이드 샌들(or 스니커즈)과 캡모자.";
    styleScore = 70;
    energyLevel = 100;
    confidenceLevel = 60;
    survivalTips.push("햇살이 좋은 날에는 중앙광장 잔디밭에 눕기 전 에코백을 돗자리 대용으로 쓰는 꿀팁이 있습니다.");
    styleFortune = "가방 없이 가볍게 나서는 것만으로도 패션 완성! 자유로움이 최고의 액세서리입니다.";
  } else if (schedule === "friend") {
    characterName = "안암 안줏거리 평론가";
    characterDescription = "친구들과의 웃음소리가 민주광장 끝까지 울려퍼지는 분위기 메이커. 치맥과 삼겹살 냄새에 굴하지 않는 가성비 패션 마스터.";
    nickname = "미식 수다쟁이";
    recommendedOutfit = "캐주얼 오버롤 데님 혹은 로고 프린팅 롱슬리브 티셔츠에 캐주얼 볼캡.";
    styleScore = 78;
    energyLevel = 75;
    confidenceLevel = 72;
    survivalTips.push("음식 냄새가 밸 수 있는 자리를 위해, 세탁이 용이하고 탈취가 쉬운 면 소재 100% 티셔츠 계열이 탁월합니다.");
    styleFortune = "후드티 끈을 가볍게 리본으로 묶어 포인트를 주면 친구들 사이에서 귀여운 주목을 받을 수 있습니다.";
  } else {
    // normal class
    if (mood === "tired" || mood === "lethargic") {
      characterName = "도서관 요양 중인 과제 요정";
      characterDescription = "밤샘 과제와 강의에 에너지를 모두 빼앗긴 상태. 후드티 모자를 푹 눌러쓴 채 생존 보행을 시도하고 있습니다.";
      nickname = "과제 노예 3년차";
      recommendedOutfit = "여유로운 핏의 고려대 로고 후드티에 와이드 그레이 가디건, 슬리퍼가 아닌 크록스 매치.";
      styleScore = 60;
      energyLevel = 25;
      confidenceLevel = 50;
      survivalTips.push("과방이나 도서관에서 쪽잠을 청할 땐 목에 타격을 주지 않는 푹신한 맨투맨 카라 깃을 유용하게 쓰세요.");
      styleFortune = "모자로 살짝 가린 흐트러진 헤어스타일조차 무심한 듯 시크한 '꾸안꾸(꾸민 듯 안 꾸민 듯)' 힙합 감성으로 해석됩니다.";
    } else {
      characterName = "다람쥐길 댄디 호랑이";
      characterDescription = "수업을 들으러 발걸음도 가볍게 이동하는 모범 대학생. 단정한 느낌 속에 은근한 학교 자부심을 드러냅니다.";
      nickname = "정석 엘리트";
      recommendedOutfit = "스트라이프 셔츠 레이어드 니트, 치노 팬츠, 그리고 브라운 레더 가방 매칭.";
      styleScore = 85;
      energyLevel = 70;
      confidenceLevel = 80;
      survivalTips.push("과잠이나 맨투맨에 칼라 깃을 레이어드하는 것만으로 신입생 같은 프레시한 무드 연출이 가능합니다.");
      styleFortune = "크림색과 버건디색의 배색 비율을 7대 3으로 매치해보세요. 가장 세련된 KU 지수가 탄생합니다.";
    }
  }

  // Weather adjustments
  if (weather === "rainy") {
    recommendedColors.push("차콜그레이");
    recommendedOutfit += " (방수 기능이 있거나 오염에 강한 어두운 컬러 하의 매치 필수)";
    survivalTips.push("비오는 날에 크림색이나 베이지 레깅스는 빗물 진흙 테러를 당하기 쉽습니다. 오늘은 어두운 차콜이나 진청 데님이 안전지대입니다.");
    survivalTips.push("소중한 에코백 대신, 빗물이 바로 흐르는 백팩이나 방수가 가미된 나일론 메신저 백을 전술가처럼 선택하세요.");
  } else if (weather === "cloudy") {
    recommendedColors.push("아이보리");
    survivalTips.push("흐린 날에는 거리에 채도가 낮아 보이므로, 조금 더 화사한 붉은색 포인트(버건디 양말이나 스니커즈 라인)로 포인트를 주면 돋보입니다.");
  } else if (weather === "snowy") {
    recommendedColors.push("블랙 코트 에디션");
    recommendedOutfit += " (보온성을 극대화하기 위해 기모 레이어가 추가된 아우터 필수)";
    survivalTips.push("함박눈이 내릴 땐 고려대학교 로고 모자를 깊게 쓰면 머리가 젖는 것을 쾌적하게 막아줄 수 있습니다.");
  } else {
    // Sunny
    recommendedColors.push("화사한 크림옐로우");
    survivalTips.push("오늘처럼 맑은 날에는 햇살에 버건디 컬러가 아주 청량하게 빛납니다. 자연 채광 아래서 인생샷 건져보세요!");
  }

  // Temperature adjustments
  if (temp <= 5) {
    recommendedOutfit = "[한파 특보 방어룩] " + recommendedOutfit + " 위에 헤비 오버사이즈 롱패딩과 두툼한 머플러 매치.";
    styleScore = Math.max(40, styleScore - 15);
    energyLevel = Math.max(20, energyLevel - 10);
    survivalTips.push("영하에 가까운 날씨입니다. 패션보다는 관절 보온이 주 목적이 되어야 함을 아기호랑이 연구소에서 경고합니다!");
  } else if (temp <= 15) {
    recommendedOutfit = "[환절기 레이어드룩] 셔츠 위에 " + recommendedOutfit + "를 덧입고 가벼운 트렌치코트나 블루종 아우터를 추가.";
    styleScore += 5;
    survivalTips.push("아침저녁 일교차가 심한 10도 안팎 날씨입니다. 과잠을 가방 스트랩에 걸치거나 레이어드 가디건을 둘러 멋스럽게 스마트 조율해보세요.");
  } else if (temp >= 25) {
    recommendedOutfit = "[청량 썸머룩] 반팔 로고 티셔츠에 통풍이 잘되는 와이드 미디움 버건디 쇼츠.";
    energyLevel = Math.max(30, energyLevel - 15);
    survivalTips.push("더운 날씨에 텀블러는 그 자체로 시원한 얼음 음료를 챙겨주는 친환경 패션 소품입니다. 얼음 가득 아이스 아메리카노 장전하세요.");
  }

  const availableGoods = ["과잠", "후드티", "맨투맨", "에코백", "텀블러", "모자"];
  const userHas = goods;

  if (userHas.length > 0) {
    recommendedGoods = userHas.filter(() => Math.random() > 0.3);
    if (recommendedGoods.length === 0) recommendedGoods = [userHas[0]];
  } else {
    recommendedGoods = ["에코백", "텀블러"];
  }

  const selectedGoodsDetails = availableGoods.map((g) => {
    const owned = userHas.includes(g as GoodsItem);
    let score = owned ? 85 : 30;
    let tip = "";

    if (g === "과잠") {
      tip = owned ? "역시 고대생의 필수품! 버건디와 레더 슬리브의 조화가 완벽합니다." : "과잠이 없다면, 크림슨 자켓이나 와인색 깔끔한 가디건으로 버건디 핏을 흉내낼 수 있습니다.";
    } else if (g === "후드티") {
      tip = owned ? "무선 헤드폰과 함께 코디하면 참살이 힙스터 완성!" : "고대 크림 후드티는 영원한 베스트셀러이니 장만을 적극 검토해보세요.";
    } else if (g === "맨투맨") {
      tip = owned ? "정경대 후문 통근 룩에 가장 단정하고 알맞은 데일리 이지웨어." : "깔끔한 무지 맨투맨에 고려대 자수 핀 배지를 달아보세요.";
    } else if (g === "에코백") {
      tip = owned ? "전공책과 태블릿이 든든하게 들어가는 실용 패션의 종착지." : "가벼운 캔버스 백으로 네추럴한 캠퍼스 가벼움을 유지하세요.";
    } else if (g === "텀블러") {
      tip = owned ? "중앙광장 뉴 호랑이 아우라의 소울 파트너. 수분 보충은 에티켓!" : "깔끔한 미니 실버 텀블러를 배치해 스마트 에코 감성을 연출하세요.";
    } else {
      tip = owned ? "늦잠을 자거나 머리 손질이 귀찮을 때 쓰는 마스터 키." : "심플한 로고 캡은 캠퍼스 룩을 순식간에 스트리트 룩으로 커스텀해줍니다.";
    }

    return { name: g, score, tip };
  });

  const overallRate = Math.round((userHas.length / availableGoods.length) * 100);

  let recommendationReason = "";
  if (schedule === "exam") {
    recommendationReason = `오늘은 공부와 시험에 온 노력을 쏟아야 하는 '생존' 타이밍입니다. 사용자가 보유 중인 굿즈 중 [${userHas.join(", ") || "의류 기본 아이템"}]을 활용해 보온성과 수납력을 최우선 극대화했습니다. 다소 눅눅할 수 있는 ${weather === "rainy" ? "빗길 날씨" : "캠퍼스 분위기"}에 맞게 어두운 톤의 조바심을 막는 편안한 기능성 레이어로 매칭했습니다.`;
  } else if (schedule === "presentation") {
    recommendationReason = `오늘의 빅 이벤트인 발표 일정을 완벽히 영웅적으로 소화해내기 위하여 격식과 모던한 단정함을 강조하는 코디를 설계했습니다. ${temp}도의 쾌적함을 살리며, 버건디 골드 엠블럼 컬러를 포인트 슬랙스나 안경테, 벨트에 고급스럽게 분산배치하여 지적이면서 위풍당당한 인상을 선사합니다.`;
  } else {
    recommendationReason = `오늘의 기분인 '${mood}' 상태를 밝고 에너제틱하게 끌어올리기 위한 고려대학교 컬러 매직 코디입니다. 움직임이 잦은 대학교 하루 일과에 맞춰 기동성이 훌륭한 스트릿 캐주얼 웨어로 무장하였으며, 단정한 레이어드 스타일을 가미해 세련된 고대생 오오티디(OOTD) 감각을 연출합니다.`;
  }

  return {
    characterName,
    characterDescription,
    nickname,
    styleScore: Math.min(100, Math.max(10, styleScore)),
    energyLevel: Math.min(100, Math.max(10, energyLevel)),
    confidenceLevel: Math.min(100, Math.max(10, confidenceLevel)),
    recommendedOutfit,
    recommendedColors,
    goodsCombination: recommendedGoods,
    utilizationAnalysis: {
      overallRate,
      selectedGoodsDetails
    },
    recommendationReason,
    survivalTips: survivalTips.length > 0 ? survivalTips : [
      "참살이길 계단이나 엘리베이터를 탈 때 가방 끈을 점검하세요.",
      "햇살이 비쳐 온도가 낮아 보여도 은근히 그늘은 쌀쌀하니 환절기에 감기 조심하십시오."
    ],
    styleFortune,
    source: "static_client_engine"
  };
}
