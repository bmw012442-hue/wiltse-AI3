window.ICU_MANUAL_DB = {
  "app": {
    "name": "ICU AI 업무 매뉴얼",
    "version": "1.47.0-v47-button-cache-fix",
    "language": "ko",
    "source": "업무 지침 매뉴얼(교육전담) + 윌스 ICU AI 업무 매뉴얼 + 신규(경력직) OJT + 사용자 제시 30개 카테고리 + 업로드 매뉴얼 실제 그림/표 반영",
    "notice": "병원 내부 프로토콜 확인용 보조 자료입니다. 실제 처치·투약·처방은 담당의 지시와 병원 최신 지침을 우선합니다. 환자 개인정보는 입력하지 마세요."
  },
  "schema": {
    "id": "string",
    "category": "string",
    "title": "string",
    "aliases": [
      "string"
    ],
    "urgency": "routine | urgent | emergency",
    "summary": "string",
    "indications": [
      "string"
    ],
    "preparation": [
      "string"
    ],
    "steps": [
      "string"
    ],
    "dosage_or_mix": [
      "string"
    ],
    "orders_or_emr": [
      "string"
    ],
    "charting": [
      "string"
    ],
    "io": [
      "string"
    ],
    "warnings": [
      "string"
    ],
    "source_refs": [
      "string"
    ]
  },
  "items": [
    {
      "id": "DRUG001",
      "category": "약물/Mix/항부정맥",
      "title": "Amiodarone / Cordarone",
      "aliases": [
        "코다론",
        "Cordarone",
        "Amiodarone",
        "아미오다론",
        "VT",
        "VF",
        "AF",
        "loading",
        "maintenance"
      ],
      "urgency": "urgent",
      "summary": "Amiodarone loading 및 maintenance mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Loading과 maintenance 처방을 구분한다.",
        "주입 시작시간과 속도 변경 시간을 확인한다.",
        "BP/HR/rhythm을 확인한다."
      ],
      "dosage_or_mix": [
        "Loading: 코다론 150mg(1amp) + 5%DW 100cc mix",
        "Maintenance: 코다론 900mg + 5%DW 500cc mix",
        "6hr 33.3cc/hr → 18hr 16.5cc/hr"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "저혈압/서맥/rhythm 변화 주의",
        "담당의 지시와 병원 최신 프로토콜 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/항부정맥",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG002",
      "category": "약물/Mix/항부정맥",
      "title": "Herben / Diltiazem",
      "aliases": [
        "헤르벤",
        "Herben",
        "Diltiazem",
        "딜티아젬",
        "rate control"
      ],
      "urgency": "urgent",
      "summary": "Herben loading 및 continuous infusion mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Loading/continuous 구분 확인",
        "BP/HR 확인 후 투여"
      ],
      "dosage_or_mix": [
        "Loading: 헤르벤 25mg + 5%DW 50cc mix, 2분 동안 주입",
        "Continuous: 헤르벤 50mg 4vial + 5%DW 200cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "저혈압/서맥 주의",
        "담당의 지시와 병원 최신 프로토콜 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/항부정맥",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG003",
      "category": "약물/Mix/심혈관",
      "title": "Nitroglycerine / NTG",
      "aliases": [
        "니트로",
        "Nitroglycerine",
        "니트로링구알",
        "NTG",
        "흉통",
        "BP control"
      ],
      "urgency": "urgent",
      "summary": "Nitroglycerine continuous infusion mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 속도와 BP target 확인",
        "BP와 증상 변화를 관찰"
      ],
      "dosage_or_mix": [
        "니트로링구알 50mg(5amp) + NS 450cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "저혈압 주의",
        "담당의 지시 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/심혈관",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG004",
      "category": "약물/Mix/승압제",
      "title": "Norepinephrine / 노르핀",
      "aliases": [
        "노르핀",
        "Norepinephrine",
        "NE",
        "norepi",
        "승압제",
        "저혈압",
        "shock",
        "노르에피",
        "levophed",
        "norepi mix",
        "승압제 mix"
      ],
      "urgency": "urgent",
      "summary": "저혈압/쇼크 상황에서 사용하는 대표 승압제.",
      "indications": [
        "Shock",
        "Septic shock",
        "Hypotension"
      ],
      "preparation": [],
      "steps": [
        "처방 농도와 infusion 속도를 확인한다.",
        "BP/HR/말초순환을 지속 확인한다.",
        "용량 변경 시 기록과 V/S 메모를 맞춘다."
      ],
      "dosage_or_mix": [
        "노르핀 20mg(1amp) + 5%DW 180cc mix",
        "노르핀 40mg(2amp) + 5%DW 460cc mix"
      ],
      "orders_or_emr": [],
      "charting": [
        "시작시간, 농도, 속도, 용량 변경, 혈압 반응 기록"
      ],
      "io": [
        "Infusion pump volume 기준 I/O 입력"
      ],
      "warnings": [
        "중심정맥 투여 권장",
        "외유출/말초허혈 주의",
        "담당의 지시와 병원 최신 프로토콜 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/승압제",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG005",
      "category": "약물/Mix/응급",
      "title": "Epinephrine / 에피네프린",
      "aliases": [
        "에피",
        "Epinephrine",
        "Epi",
        "CPR",
        "심정지",
        "code blue"
      ],
      "urgency": "emergency",
      "summary": "CPR 및 쇼크 상황에서 사용하는 epinephrine mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "CPR 상황에서는 CPR flow에 맞춰 투여 및 기록한다.",
        "Continuous infusion 처방 시 농도/속도 확인 후 투여한다."
      ],
      "dosage_or_mix": [
        "Epinephrine 10mg(10amp) + NS 90cc mix"
      ],
      "orders_or_emr": [],
      "charting": [
        "투여 시간, 투여량, rhythm 변화, ROSC 여부 기록"
      ],
      "io": [],
      "warnings": [
        "부정맥/혈압상승 모니터링",
        "CPR 기록지와 투약시간 일치",
        "담당의 지시와 병원 최신 프로토콜 우선"
      ],
      "related": [
        "CPR001"
      ],
      "tags": [
        "약물/Mix/응급",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG006",
      "category": "약물/Mix/승압제",
      "title": "Vasopressin / 바소프레신",
      "aliases": [
        "바소",
        "Vasopressin",
        "바소프레신",
        "승압제",
        "shock"
      ],
      "urgency": "urgent",
      "summary": "쇼크 상황에서 사용하는 vasopressin mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 속도 확인 후 투여",
        "BP/말초순환/소변량 확인"
      ],
      "dosage_or_mix": [
        "바소프레신 40unit(2amp) + 5%DW 200cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/승압제",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG007",
      "category": "약물/Mix/진정",
      "title": "Remifentanil / Ultian",
      "aliases": [
        "울티안",
        "Ultian",
        "Remifentanil",
        "진정",
        "sedation",
        "vent"
      ],
      "urgency": "urgent",
      "summary": "Vent 환자 진정/진통 유지에 사용하는 remifentanil mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 속도 확인 후 투여",
        "RASS/통증/BP/호흡상태 확인"
      ],
      "dosage_or_mix": [
        "울티안 10mg(2vial) + DW 100cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "호흡억제/저혈압 주의",
        "Vent setting과 함께 확인"
      ],
      "related": [],
      "tags": [
        "약물/Mix/진정",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG008",
      "category": "약물/Mix/진정",
      "title": "Midazolam / 미다컴",
      "aliases": [
        "미다컴",
        "Midazolam",
        "미다졸람",
        "진정"
      ],
      "urgency": "urgent",
      "summary": "Midazolam continuous infusion mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 속도와 목표 진정수준 확인",
        "RASS/호흡/BP 확인"
      ],
      "dosage_or_mix": [
        "미다컴 90mg(6amp) + DW 82cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "호흡억제/저혈압 주의"
      ],
      "related": [],
      "tags": [
        "약물/Mix/진정",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG009",
      "category": "약물/Mix/진정",
      "title": "Dexmedetomidine / 덱스메딘",
      "aliases": [
        "덱스",
        "덱스메딘",
        "Dexmedetomidine",
        "진정"
      ],
      "urgency": "urgent",
      "summary": "Dexmedetomidine premix/continuous infusion.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 속도 확인 후 투여",
        "HR/BP/RASS 확인"
      ],
      "dosage_or_mix": [
        "덱스메딘 50cc"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "서맥/저혈압 주의"
      ],
      "related": [],
      "tags": [
        "약물/Mix/진정",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG010",
      "category": "약물/Mix/진정",
      "title": "Propofol / 프레조폴",
      "aliases": [
        "프로포폴",
        "프리폴",
        "Propofol",
        "프레조폴",
        "진정"
      ],
      "urgency": "urgent",
      "summary": "Propofol premix/continuous infusion.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 속도와 진정 목표 확인",
        "BP/호흡상태/RASS 확인"
      ],
      "dosage_or_mix": [
        "프레조폴엠씨티 50cc"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "저혈압/호흡억제 주의"
      ],
      "related": [],
      "tags": [
        "약물/Mix/진정",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG011",
      "category": "약물/Mix/근이완",
      "title": "Rocuronium / 로큐니움",
      "aliases": [
        "로큐니움",
        "Rocuronium",
        "근이완제",
        "intubation",
        "삽관"
      ],
      "urgency": "emergency",
      "summary": "삽관/vent 관련 근이완제 mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 및 목적 확인",
        "진정제/vent/airway 준비 상태 확인"
      ],
      "dosage_or_mix": [
        "로큐니움 500mg(10vial) + NSS 50cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "의식 있는 환자에게 진정 없이 투여 금지",
        "Airway/vent 준비 필수",
        "담당의 지시 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/근이완",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG012",
      "category": "약물/Mix/BP control",
      "title": "Nicardipine / Perdipine",
      "aliases": [
        "페르디핀",
        "Nicardipine",
        "Perdipine",
        "BP control",
        "혈압"
      ],
      "urgency": "urgent",
      "summary": "혈압 조절용 nicardipine mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 target BP와 infusion 속도 확인",
        "투여 중 1시간마다 BP 확인"
      ],
      "dosage_or_mix": [
        "페르디핀 200mg(20amp) + NSS 300cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "저혈압 주의",
        "BP target은 지시처방 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/BP control",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG013",
      "category": "약물/Mix/BP control",
      "title": "Labetalol / 라베신",
      "aliases": [
        "라베신",
        "Labetalol",
        "혈압",
        "BP control"
      ],
      "urgency": "urgent",
      "summary": "혈압 조절용 labetalol mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 용량/속도 확인",
        "BP/HR 확인"
      ],
      "dosage_or_mix": [
        "라베신 600mg(30amp) + 5DW 80cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "저혈압/서맥 주의"
      ],
      "related": [],
      "tags": [
        "약물/Mix/BP control",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG014",
      "category": "약물/Mix/Insulin",
      "title": "Regular Insulin continuous / RI",
      "aliases": [
        "RI",
        "휴물린",
        "Humulin-R",
        "Insulin",
        "인슐린",
        "DKA",
        "BST"
      ],
      "urgency": "urgent",
      "summary": "RI continuous infusion 및 DKA/BST 조절.",
      "indications": [],
      "preparation": [],
      "steps": [
        "BST 200 이하 감소 전까지 BST q1h, 이후 q2h 확인",
        "BST >250: +1cc/hr",
        "BST 150-250: 마지막 속도 유지, 1시간 후 BST check",
        "BST <150: 1시간 stop 후 2cc/hr로 재시작",
        "BST <100: stop 유지"
      ],
      "dosage_or_mix": [
        "휴물린-R 100unit(1cc) + NS 100cc mix",
        "DKA: N/S 100cc + RI 100IU mix, 2cc/hr 시작"
      ],
      "orders_or_emr": [],
      "charting": [
        "BST, RI 속도, 변경 사유, F/U 결과 기록"
      ],
      "io": [],
      "warnings": [
        "저혈당 주의",
        "RI 투여 후 F/U 시간 누락 주의"
      ],
      "related": [],
      "tags": [
        "약물/Mix/Insulin",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG015",
      "category": "약물/Mix/진통",
      "title": "Morphine / 몰핀",
      "aliases": [
        "몰핀",
        "Morphine",
        "염몰핀",
        "진통",
        "마약"
      ],
      "urgency": "urgent",
      "summary": "Morphine infusion mix 및 마약관리 주의.",
      "indications": [],
      "preparation": [],
      "steps": [
        "마약 처방/잔량/반납 기준 확인",
        "통증, 호흡, BP 확인"
      ],
      "dosage_or_mix": [
        "염몰핀주사 50mg(5amp) + DW 45cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "호흡억제/저혈압 주의",
        "잔량 및 앰플 관리 필수"
      ],
      "related": [],
      "tags": [
        "약물/Mix/진통",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG016",
      "category": "약물/Mix/응급",
      "title": "Bivon / Sodium bicarbonate",
      "aliases": [
        "비본",
        "Bivon",
        "Bicarbonate",
        "탄산수소나트륨",
        "NaHCO3"
      ],
      "urgency": "emergency",
      "summary": "Bicarbonate mix.",
      "indications": [],
      "preparation": [],
      "steps": [],
      "dosage_or_mix": [
        "탄산수소나트륨 240ml(12amp) + NSS 260cc mix"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "ABGA/전해질/처방 확인",
        "담당의 지시 우선"
      ],
      "related": [],
      "tags": [
        "약물/Mix/응급",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG017",
      "category": "약물/Mix/강심제",
      "title": "Dobutamine / 도부타민",
      "aliases": [
        "도부",
        "Dobutamine",
        "도부타민",
        "강심제",
        "심박출"
      ],
      "urgency": "urgent",
      "summary": "Dobutamine single/doubling mix.",
      "indications": [],
      "preparation": [],
      "steps": [],
      "dosage_or_mix": [
        "도부타민프리믹스 500mg/250ml(single)",
        "도부타민프리믹스 500mg/250ml + 도부타민 주사액 500mg(2amp) mix(doubling)"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "HR/rhythm/BP 확인"
      ],
      "related": [],
      "tags": [
        "약물/Mix/강심제",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG018",
      "category": "약물/Mix/승압제",
      "title": "Dopamine / 도파민",
      "aliases": [
        "도파민",
        "Dopamine",
        "승압제"
      ],
      "urgency": "urgent",
      "summary": "Dopamine single/doubling mix.",
      "indications": [],
      "preparation": [],
      "steps": [],
      "dosage_or_mix": [
        "도파민프리믹스 800mg/500ml(single)",
        "도파민프리믹스 800mg/500ml + 도파민 주사액 800mg(4amp) mix(doubling)"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "부정맥, HR/BP 확인"
      ],
      "related": [],
      "tags": [
        "약물/Mix/승압제",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG019",
      "category": "약물/전해질",
      "title": "Electrolyte replacement / K·P·Mg",
      "aliases": [
        "KCL",
        "Phosten",
        "Mg",
        "전해질",
        "K replacement",
        "P replacement",
        "Mg replacement"
      ],
      "urgency": "urgent",
      "summary": "K/P/Mg 전해질 교정 mix.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Lab 수치와 처방 확인",
        "주입 시간과 line 상태 확인"
      ],
      "dosage_or_mix": [
        "KCL 20ml(40mEq) + NS 100cc 또는 5%DW 100cc mix, 2hr 주입",
        "Phosten 20ml + NSS 100cc 또는 5%DW 200cc mix, 2hr 주입",
        "10% MgCl 2g/20ml + NS 100cc mix, 2hr 주입"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "추가 코멘트 없으면 지침서대로, 코멘트 있으면 지시에 맞게 수행"
      ],
      "related": [],
      "tags": [
        "약물/전해질",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG020",
      "category": "투약/AST",
      "title": "AST 시행 항생제",
      "aliases": [
        "AST",
        "항생제",
        "타박탐",
        "유박탐",
        "세파졸린",
        "타짐",
        "트리악손",
        "맥스핌"
      ],
      "urgency": "routine",
      "summary": "AST를 시행해야 하는 항생제 목록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Penicillin계: 타박탐, 유박탐",
        "세파1세대: 세파제돈주, 세파졸린주",
        "세파2세대: 제티암주",
        "세파3세대: 타짐주, 트리악손주(세프키존), 뉴디짐주, 자비쎄프타주, 세포탁심",
        "세파4세대: 맥스핌주"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "병원 최신 항생제 지침 우선"
      ],
      "related": [],
      "tags": [
        "투약/AST",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG021",
      "category": "투약/AST",
      "title": "AST 미시행 항생제",
      "aliases": [
        "AST 안함",
        "aminoglycoside",
        "Vancomycin",
        "Carbapenem",
        "Quinolone",
        "콜리스틴"
      ],
      "urgency": "routine",
      "summary": "AST를 하지 않는 항생제 목록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Aminoglycoside: 신풍아미카신주, 겐타마이신주",
        "Vancomycin: 반코마이신주, 하노마이신주",
        "Glycopeptides: 타포신주",
        "Polypeptides: 콜리스주",
        "Quinolone: 사이톱신, 레포신",
        "Carbapenems: 오로페넴주, 인반즈, 프리페넴주"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "병원 최신 항생제 지침 우선"
      ],
      "related": [],
      "tags": [
        "투약/AST",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG022",
      "category": "투약/AST",
      "title": "AST 표준화 희석/판독",
      "aliases": [
        "AST",
        "피내주사",
        "ID",
        "항생제 반응검사",
        "skin test",
        "1:5000"
      ],
      "urgency": "routine",
      "summary": "AST 표준화 희석과 판독.",
      "indications": [],
      "preparation": [],
      "steps": [
        "전박 내측에 피내주사",
        "약 0.1cc 주입하여 수포 형성",
        "15~20분 후 판정"
      ],
      "dosage_or_mix": [
        "항생제에 증류수 5cc 혼합",
        "20mg: ① 용액 0.1cc + 증류수 0.9cc",
        "2mg: ② 용액 0.9cc 버리고 남은 0.1cc + 증류수 0.9cc",
        "0.2mg: ③ 용액 0.9cc 버리고 남은 0.1cc + 증류수 0.9cc",
        "0.5g→2.5cc, 1g→5cc, 2g→10cc"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "양성반응: 3mm 이상 팽진 또는 처음 표기보다 크기가 증가한 팽진이 발적 동반",
        "양성 시 주치의 보고"
      ],
      "related": [],
      "tags": [
        "투약/AST",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "업무 지침 매뉴얼(교육전담)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE001",
      "category": "Routine/Day",
      "title": "Day routine / 데이 업무",
      "aliases": [
        "Day",
        "데이",
        "routine",
        "회진",
        "처방",
        "마약처방전"
      ],
      "urgency": "routine",
      "summary": "Day 근무 핵심 흐름.",
      "indications": [],
      "preparation": [],
      "steps": [
        "물품카운트 및 E-cart 확인",
        "인계 후 라운딩",
        "8~9시 라벨 출력 및 액팅 준비",
        "8시 Feeding/아침/회진 챙기기",
        "회진 내용 차팅",
        "다음날 마약/향정 처방전 내리기",
        "익일 처방 확인 후 Cadex 정리 및 스케줄링",
        "익일 처방 17시까지 안 나면 Evening에게 인계"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "NS는 다음날 Lab/Chest 처방 여부 확인",
        "처방 없으면 Noti"
      ],
      "related": [],
      "tags": [
        "Routine/Day",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE002",
      "category": "Routine/Evening",
      "title": "Evening routine / 이브닝 업무",
      "aliases": [
        "Evening",
        "이브닝",
        "익일처방",
        "Cadex"
      ],
      "urgency": "routine",
      "summary": "Evening 근무의 익일 처방/Cadex 정리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "익일 처방 확인",
        "추가 처방 나면 Cadex 정리 및 스케줄링",
        "당일/익일 처방 비교",
        "Lab/Chest/검사 정리"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "처방 비교 누락 주의"
      ],
      "related": [],
      "tags": [
        "Routine/Evening",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE003",
      "category": "Routine/Night",
      "title": "Night routine / 나이트 업무 상세",
      "aliases": [
        "Night",
        "나이트",
        "initial",
        "환자분류",
        "화재분류",
        "식이",
        "액팅",
        "lab",
        "제세동기",
        "BST 정도관리",
        "야간업무",
        "나이트업무",
        "밤번",
        "N duty",
        "자정이후",
        "채혈접수업무",
        "식이입력"
      ],
      "urgency": "routine",
      "summary": "나이트 근무 전체 흐름과 자정 이후 점검/채혈/식이/I/O 업무.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Initial 후 전산: 낙상·욕창·통증, Bundle, Flow sheet, 신체보호대 평가, I/O 확인",
        "환자분류·화재분류 23:00 입력",
        "개인별 식이입력에서 당일 식이 해제 후 익일 식이 체크",
        "간호액팅 스케줄링: QD 9 / BID 9-21 / QID 6-12-18-23:59 / 항생제·오르필 TID 6-14-22 / 일반 TID 9-15-21 / Nebulizer 7-12-17-21",
        "PO·지참약·nebulizer 라벨 확인 후 아침/점심/저녁 분류",
        "Dressing, Kit 교체, BST 명단, 식이판, 방사선 worklist 확인",
        "Cadex 기본간호 확인 후 dressing·kit 교체 대상 표시 및 기본간호 일자 수정",
        "당일/익일 처방 입력 및 처방 비교, Chest AP portable 확인",
        "검사결과 확인 후 필요 시 Noti",
        "Final 전 line 상태, 수액, pump, drain, Foley, ventilator 상태 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "Night 기준 Flow sheet는 00:00-05:59 시간대 확인",
        "낙상·욕창·통증은 N 23:00 기준",
        "I/O는 N 21:00-06:00 기준"
      ],
      "io": [],
      "warnings": [
        "병원 최신 지침과 담당의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "Routine/Night",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 Routine Job / Night"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE004",
      "category": "Routine/스케줄링",
      "title": "간호액팅 스케줄링 기준",
      "aliases": [
        "스케줄링",
        "간호액팅",
        "QD",
        "BID",
        "TID",
        "QID",
        "네뷸"
      ],
      "urgency": "routine",
      "summary": "Night에서 익일 간호액팅 스케줄링 시 자주 쓰는 시간 기준.",
      "indications": [],
      "preparation": [],
      "steps": [
        "QD: 9시",
        "BID: 9-21시",
        "QID: 6-12-18-23:59",
        "안티/오르필 TID: 6-14-22",
        "일반 TID: 9-15-21",
        "네뷸: 7-12-17-21"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "처방 용법이 다르면 처방/remark 우선"
      ],
      "related": [],
      "tags": [
        "Routine/스케줄링",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE005",
      "category": "Routine/Initial",
      "title": "Initial assessment / ICU 라운딩",
      "aliases": [
        "initial",
        "라운딩",
        "GCS",
        "Motor",
        "LOC",
        "Line",
        "Foley",
        "Vent",
        "C-line",
        "A-line"
      ],
      "urgency": "routine",
      "summary": "근무 시작 시 환자 상태 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "신경학적: GCS, Motor, LOC 확인",
        "호흡기계: O2, Vent, HFNC 확인",
        "순환기계: line, C-line, A-line 확인",
        "Foley, L-tube, 신체보호대 확인",
        "Pulse oximeter 위치 변경",
        "수액세트/line 상태 정리",
        "마지막 라운딩 시 line 상태 재확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "낙상/욕창/통증 평가",
        "Bundle",
        "Flow sheet",
        "신체보호대 평가",
        "I/O"
      ],
      "io": [],
      "warnings": [],
      "related": [],
      "tags": [
        "Routine/Initial",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0014.png",
          "alt": "신경계 사정 가이드",
          "caption": "신경계 사정 가이드"
        }
      ]
    },
    {
      "id": "ROUTINE006",
      "category": "Routine/I/O",
      "title": "I/O 입력과 마감",
      "aliases": [
        "I/O",
        "input output",
        "인풋아웃풋",
        "배액",
        "Foley",
        "infusion volume"
      ],
      "urgency": "routine",
      "summary": "ICU I/O 입력과 마감 기준.",
      "indications": [],
      "preparation": [],
      "steps": [
        "D: 6-13, E: 13-21, N: 21-6 기준",
        "Main fluid, 간호액팅 side 확인 후 입력",
        "Infusion pump volume 확인 후 zeroing",
        "식사 100%=400 기준 적용",
        "배액관은 syringe로 정확히 check",
        "Side 약물은 바로바로 입력"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "50cc 미만 inj은 I/O 제외 기준 확인",
        "과한 positive balance 시 Noti",
        "배액관 I/O 측정 후 알코올 스왑"
      ],
      "related": [],
      "tags": [
        "Routine/I/O",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE007",
      "category": "Routine/평가",
      "title": "낙상·욕창·통증 평가",
      "aliases": [
        "낙상",
        "욕창",
        "통증",
        "고위험군",
        "재평가"
      ],
      "urgency": "routine",
      "summary": "근무조별 낙상/욕창/통증 평가.",
      "indications": [],
      "preparation": [],
      "steps": [
        "D 08:00, E 16:00, N 23:00 평가",
        "Night는 욕창 재평가 및 시간 변경",
        "통증은 initial 및 진통제 투약 후 effect 확인",
        "Inject 30분 후, PO 1시간 후 effect 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "욕창 부위 마사지 금지",
        "통증평가 도구와 기록 일치"
      ],
      "related": [],
      "tags": [
        "Routine/평가",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0006.png",
          "alt": "NRS 통증 평가 척도",
          "caption": "NRS 통증 평가 척도"
        },
        {
          "src": "bin0007.png",
          "alt": "FLACC 통증 평가 척도",
          "caption": "FLACC 통증 평가 척도"
        },
        {
          "src": "bin0008.png",
          "alt": "FPS 통증 평가 척도",
          "caption": "FPS 통증 평가 척도"
        }
      ]
    },
    {
      "id": "ROUTINE008",
      "category": "Routine/Bundle",
      "title": "Bundle 입력",
      "aliases": [
        "Bundle",
        "중심정맥관",
        "Foley",
        "Vent",
        "C-line"
      ],
      "urgency": "routine",
      "summary": "중심정맥관/Foley/Vent 등 Bundle 입력.",
      "indications": [],
      "preparation": [],
      "steps": [
        "D 08:00, E 16:00, N 23:00 입력",
        "중심정맥관 1~5번 확인",
        "6~8번은 dressing 시 확인",
        "Foley/C-line/Vent 해당 항목 입력"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "해당 기구 유무 확인 후 입력"
      ],
      "related": [],
      "tags": [
        "Routine/Bundle",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE009",
      "category": "Routine/Flow sheet",
      "title": "Flow sheet 입력",
      "aliases": [
        "Flow sheet",
        "GCS",
        "Motor",
        "LOC",
        "CRRT",
        "O2",
        "라인"
      ],
      "urgency": "routine",
      "summary": "Flow sheet 입력 시간대와 항목.",
      "indications": [],
      "preparation": [],
      "steps": [
        "D 08:00-13:59, E 16:00-21:59, N 00:00-05:59 기준",
        "호흡기계 O2 입력",
        "순환기계 line, pacing 입력",
        "CRRT 입력",
        "GCS/Motor/LOC는 2시간마다 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "간호기록과 비교하며 작성"
      ],
      "related": [],
      "tags": [
        "Routine/Flow sheet",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE010",
      "category": "Routine/신체보호대",
      "title": "신체보호대 평가",
      "aliases": [
        "신체보호대",
        "보호대",
        "restraint",
        "2시간"
      ],
      "urgency": "routine",
      "summary": "신체보호대 평가 및 기록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "2시간 단위 평가",
        "전번 간호기록 확인",
        "Initial 라운딩 시 부위 확인",
        "정방향 매듭 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "신체보호대 평가지 작성"
      ],
      "io": [],
      "warnings": [
        "부위/피부상태 확인"
      ],
      "related": [],
      "tags": [
        "Routine/신체보호대",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE011",
      "category": "Routine/부착기구",
      "title": "부착기구 입력",
      "aliases": [
        "부착기구",
        "HD cath",
        "trialysis",
        "Mahurkar",
        "Perm cath"
      ],
      "urgency": "routine",
      "summary": "Cadex 기본간호와 부착기구 입력.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Cadex 기본간호에서 dressing/기구 확인",
        "HD cath는 trialysis 3 lumen 여부 확인",
        "Mahurkar는 2-lumen 부위 따로 입력",
        "Perm cath와 Mahurkar 동의서 구분"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "기구 제거 시 간호기록, 기본간호, flow sheet 수정"
      ],
      "related": [],
      "tags": [
        "Routine/부착기구",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE012",
      "category": "입원/Orientation",
      "title": "ICU 신환 Orientation",
      "aliases": [
        "신환",
        "Orientation",
        "입원",
        "간호정보조사지",
        "팔찌",
        "ICU 안내문"
      ],
      "urgency": "routine",
      "summary": "ICU 신환 입실 시 초기 정리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "라인정리, 모니터 연결",
        "라벨 8~9개 및 팔찌 출력",
        "간호정보조사지 작성",
        "낙상예방활동 안내문, 신체보호대 동의서, ICU 입원생활 안내문 준비",
        "보호자 연락처 1st/2nd 메모",
        "자가약/준비물 안내",
        "Cadex 및 기본간호 정리"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "간호정보조사지 빈칸 없이 작성",
        "ER 기록지와 비교 확인"
      ],
      "related": [],
      "tags": [
        "입원/Orientation",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE013",
      "category": "투약/지참약",
      "title": "지참약 관리",
      "aliases": [
        "지참약",
        "자가약",
        "식별의뢰서",
        "Self 처방"
      ],
      "urgency": "routine",
      "summary": "지참약 식별/처방/스케줄 관리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "투여 전 지참약 관리에서 실물과 약품 대조",
        "지참약 식별의뢰서 작성 후 약국으로 보냄",
        "아침/점심/저녁약 구분",
        "식별 완료 시 주치의 Noti",
        "Self 처방 시 지참약 검색 후 용법/수량 입력"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "처방용량과 실물 대조 필수"
      ],
      "related": [],
      "tags": [
        "투약/지참약",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE014",
      "category": "투약/마약",
      "title": "마약·향정 관리",
      "aliases": [
        "마약",
        "향정",
        "Pink",
        "White",
        "마약처방전",
        "반납",
        "잔량"
      ],
      "urgency": "urgent",
      "summary": "ICU 마약/향정 보관, 반납, 기록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "마약 사용 후 앰플/잔량은 버리지 않고 처방 봉투에 재보관",
        "비치마약 사용 시 다음날 처방전 내림",
        "마약 처방전 출력 내역 확인",
        "반납 시 반납처방전 출력, 봉투와 약 확인 후 반납",
        "마약은 금고/마약장에 보관"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "잔량/앰플 관리 필수",
        "인계 시 함께 확인"
      ],
      "related": [],
      "tags": [
        "투약/마약",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE015",
      "category": "기록/처방",
      "title": "기록·처방·액팅 원칙",
      "aliases": [
        "기록",
        "처방",
        "액팅",
        "Cadex",
        "flow sheet",
        "간호처방"
      ],
      "urgency": "routine",
      "summary": "기구/처치 변경 시 함께 수정해야 하는 항목.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Foley, L-tube, Dressing, IV, O2 변경 시 간호기록/간호처방/Cadex 기본간호/flow sheet 수정",
        "Foley는 부착기구와 Bundle까지 작성",
        "Dressing 교체 시 d/t 이유 기록",
        "Nasal/Mask는 O2 inhalation 처방 확인",
        "HFNC/Vent는 수가처방 별도 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "내가 시행한 처치는 처방/기록 누락 없이 확인"
      ],
      "related": [],
      "tags": [
        "기록/처방",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE016",
      "category": "처방/Pickup",
      "title": "픽업·응급발행",
      "aliases": [
        "픽업",
        "응급발행",
        "마약",
        "퇴원약",
        "간호 픽업"
      ],
      "urgency": "routine",
      "summary": "추가 처방 및 응급발행 기준.",
      "indications": [],
      "preparation": [],
      "steps": [
        "추가 처방은 응급발행",
        "오전 10:30 이전 픽업, 이후 응급발행",
        "마약/향정/퇴원약도 응급발행",
        "간호 픽업 부서 픽업만 받기"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "추가 처방 목적 파악 후 받기",
        "로스 없게 확인"
      ],
      "related": [],
      "tags": [
        "처방/Pickup",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE017",
      "category": "DNR/동의서",
      "title": "DNR 서류/처방",
      "aliases": [
        "DNR",
        "연명의료",
        "9호",
        "10호",
        "11호",
        "13호",
        "가족관계증명서"
      ],
      "urgency": "urgent",
      "summary": "DNR/연명의료 관련 서류와 처방.",
      "indications": [],
      "preparation": [],
      "steps": [
        "DNR 별도서식 9, 11, 13호 확인",
        "사전연명의료의향서 O: 9, 10, 13호 + 가족관계증명서 + 신분증 사본",
        "사전연명의료의향서 X: 9, 11, 13호 + 가족관계증명서 + 신분증 사본",
        "DNR 체크표 침상에 준비",
        "관련 협진료/계획료/이행관리료 처방 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "서류 누락 주의",
        "병원 최신 서식 기준 우선"
      ],
      "related": [],
      "tags": [
        "DNR/동의서",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "LAB001",
      "category": "검사/Lab bottle",
      "title": "Lab bottle 종류와 채혈 순서 상세",
      "aliases": [
        "Lab bottle",
        "채혈병",
        "파랑",
        "빨강",
        "노랑",
        "보라",
        "Sodium Citrate",
        "Plain",
        "SST",
        "EDTA",
        "채혈순서",
        "파노보",
        "파랑노랑보라",
        "PT tube",
        "검체 bottle",
        "ABGA syringe"
      ],
      "urgency": "routine",
      "summary": "Bottle별 검사 항목과 채혈 순서.",
      "indications": [],
      "preparation": [],
      "steps": [
        "파랑 Sodium Citrate bottle/PT tube: PT, aPTT, INR, D-dimer. 항응고제 함유. 검정 화살표까지 정확히 채우고 가장 먼저 채혈한다.",
        "빨강 Plain bottle: 수혈 전 피프렙, Vanco TDM, aspiration 검체, cortisol. 첨가제 없음.",
        "노랑 SST bottle: Electrolyte, BUN/Cr, LFT, CRP, CK-MB, T3/T4, TSH, Troponin, Serology serum, PCT. 응고촉진제 함유.",
        "보라 EDTA bottle: CBC, ESR, HbA1c, ACTH. EDTA 항응고제 함유, 가장 마지막 채혈.",
        "파·노·보 3개 채혈 시 혈액 약 10ml 정도 준비.",
        "라벨은 눈금 보이게 붙인다.",
        "A-line/C-line에서 regurge 10ml 후 채혈하고 필요 시 flushing한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "파랑 tube는 정확히 채워야 하며 가장 먼저 채혈합니다."
      ],
      "related": [],
      "tags": [
        "검사/Lab bottle",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 Lab bottle"
      ],
      "tables": [
        {
          "title": "Lab bottle 종류와 주요 검사",
          "headers": [
            "순서",
            "Bottle",
            "첨가제/특징",
            "주요 검사",
            "주의"
          ],
          "rows": [
            [
              "1",
              "파랑 / PT tube",
              "Sodium Citrate",
              "PT, aPTT, INR, D-dimer",
              "정확한 눈금까지 채우고 먼저 채혈"
            ],
            [
              "2",
              "빨강 / Plain",
              "첨가제 없음",
              "수혈 전 검사, Vanco TDM, aspiration 검체, cortisol",
              "응고 후 검사"
            ],
            [
              "3",
              "노랑 / SST",
              "응고촉진제",
              "Electrolyte, BUN/Cr, LFT, CRP, CK-MB, T3/T4, TSH, Troponin, PCT",
              "혈청검사 중심"
            ],
            [
              "4",
              "보라 / EDTA",
              "EDTA 항응고제",
              "CBC, ESR, HbA1c, ACTH",
              "가장 마지막 채혈"
            ]
          ]
        }
      ],
      "images": [
        {
          "src": "bin0009.png",
          "alt": "채혈 bottle 실물 사진",
          "caption": "채혈 bottle 실물 사진"
        }
      ]
    },
    {
      "id": "LAB002",
      "category": "검사/채혈",
      "title": "채혈검사 기본",
      "aliases": [
        "채혈",
        "Lab",
        "A-line",
        "C-line",
        "regurge",
        "shooter"
      ],
      "urgency": "routine",
      "summary": "ICU 채혈검사 접수/채혈 기본.",
      "indications": [],
      "preparation": [],
      "steps": [
        "채혈접수업무에서 채혈접수/바코드 발행",
        "파/노/보 3개일 경우 혈액 10ml 정도",
        "A-line/C-line에서 regurge 10ml 후 채혈",
        "Lab/electro 결과는 약 1시간 고려",
        "F/U Lab은 슈터기 이용"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "라벨은 눈금 보이게",
        "파랑 tube는 꼭 다 채우기"
      ],
      "related": [],
      "tags": [
        "검사/채혈",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "LAB003",
      "category": "검사/ABGA",
      "title": "ABGA 채혈/검사",
      "aliases": [
        "ABGA",
        "A-line",
        "arterial blood gas",
        "혈가스"
      ],
      "urgency": "urgent",
      "summary": "A-line 또는 동맥혈을 이용한 ABGA 검사.",
      "indications": [],
      "preparation": [],
      "steps": [
        "A-line에서 혈액 채취",
        "ABGA syringe는 1ml만 있어도 가능",
        "기기에 syringe 삽입 후 니들 제거",
        "바코드 스캔",
        "결과 확인 후 필요 시 Noti"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "공기방울 제거",
        "채혈 후 line flushing 확인"
      ],
      "related": [],
      "tags": [
        "검사/ABGA",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0017.png",
          "alt": "ABGA 해석 4단계 공식",
          "caption": "ABGA 해석 4단계 공식"
        },
        {
          "src": "bin0019.png",
          "alt": "동맥혈 ABGA 수행절차",
          "caption": "동맥혈 ABGA 수행절차"
        },
        {
          "src": "bin001a.png",
          "alt": "ABGA 이상 시 단계별 수행",
          "caption": "ABGA 이상 시 단계별 수행"
        }
      ]
    },
    {
      "id": "LAB004",
      "category": "검사/검체",
      "title": "Stool CDT / C. difficile",
      "aliases": [
        "CDT",
        "C-difficile",
        "stool",
        "클로스트리듐",
        "검체"
      ],
      "urgency": "routine",
      "summary": "C. difficile 검사 검체.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Stool OB 통(블랙)에 검체 준비",
        "검체 바코드 확인 후 접수"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체 종류와 용기 확인"
      ],
      "related": [],
      "tags": [
        "검사/검체",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "LAB005",
      "category": "검사/검체",
      "title": "Urine analysis / Urine culture",
      "aliases": [
        "UA",
        "Urine Analysis",
        "Urine Culture",
        "소변검사",
        "소변배양"
      ],
      "urgency": "routine",
      "summary": "UA/Urine culture 검체.",
      "indications": [],
      "preparation": [],
      "steps": [
        "UA: 투명한 뚜껑 긴 bottle 사용",
        "Urine culture 처방과 검체 용기 확인",
        "Foley 환자는 sampling port에서 무균 채취"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "Urine bag에서 직접 채취 금지"
      ],
      "related": [],
      "tags": [
        "검사/검체",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "VENT001",
      "category": "호흡기/O2",
      "title": "O2 tapering / 산소 변동",
      "aliases": [
        "O2",
        "산소",
        "tapering",
        "N/P",
        "S/M",
        "mask",
        "CO2"
      ],
      "urgency": "urgent",
      "summary": "산소요법 변경 시 기록/처방 정리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "O2 tapering 또는 변동 시 간호기록 입력",
        "간호처방 수정",
        "V/S 메모 수정",
        "고령 환자 mask 적용 시 CO2 상승 가능성 확인",
        "입으로 숨쉬면 N/P에서 S/M로 변경 고려"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "처방과 실제 적용 산소량 일치 확인"
      ],
      "related": [],
      "tags": [
        "호흡기/O2",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "VENT002",
      "category": "호흡기/Vent",
      "title": "Ventilator setup",
      "aliases": [
        "Vent",
        "Ventilator",
        "벤트",
        "인공호흡기",
        "circuit",
        "WFI",
        "test lung",
        "벤틸레이터",
        "vent setting",
        "alarm",
        "high pressure",
        "low pressure",
        "PEEP",
        "TV",
        "RR",
        "FiO2"
      ],
      "urgency": "urgent",
      "summary": "Vent circuit 연결과 기본 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Vent circuit 연결",
        "WFI 연결",
        "O2 전원 연결",
        "기계 뒤 전원 켜기",
        "장치 확인(test lung)",
        "호흡회로 확인",
        "파랑=흡기(I), 하양=호기(E) 확인",
        "Vent circuit 아래 투명 통 물은 의료폐기물로 비움"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "High PEEP 시 filter 교체 가능",
        "RR 변경 시 TI 확인",
        "CO2 retention 시 RR/TV/TI 확인"
      ],
      "related": [],
      "tags": [
        "호흡기/Vent",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "VENT003",
      "category": "호흡기/Intubation",
      "title": "Intubation 준비/Assist",
      "aliases": [
        "intubation",
        "intu",
        "삽관",
        "E-tube",
        "laryngoscope",
        "Etomidate",
        "Ambu"
      ],
      "urgency": "emergency",
      "summary": "Intubation 준비와 assist.",
      "indications": [],
      "preparation": [
        "Laryngoscope + blade/video laryngoscope",
        "Surgical glove",
        "E-tube 7.0~7.5",
        "10cc syringe",
        "Stylet",
        "Airway",
        "Ambu",
        "청진기",
        "Etomidate",
        "Anchor fast"
      ],
      "steps": [
        "E-tube ballooning 확인 후 stylet 삽입",
        "Airway와 Ambu 준비",
        "Video laryngoscope blade 연결",
        "E-tube 전달",
        "삽관 후 stylet 제거",
        "Airway → Anchor fast 적용",
        "Intubation 후 Chest AP 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "Cuff 압력 확인",
        "튜브 길이 변경 시 ballooning/deflation 주의"
      ],
      "related": [],
      "tags": [
        "호흡기/Intubation",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "VENT004",
      "category": "호흡기/Vent",
      "title": "Vent nebulizer 연결",
      "aliases": [
        "Vent",
        "Nebulizer",
        "네뷸",
        "AE",
        "유량센서"
      ],
      "urgency": "routine",
      "summary": "Vent 환자 nebulizer 연결.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Vent에 AE 연결",
        "연결 후 O2와 분무기 켬",
        "유량센서 off 설정",
        "Vent nebulizer와 하단 연결 여부 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "연결 누락/유량센서 설정 확인"
      ],
      "related": [],
      "tags": [
        "호흡기/Vent",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin000d.png",
          "alt": "Nebulizer 사용 참고 자료",
          "caption": "Nebulizer 사용 참고 자료"
        }
      ]
    },
    {
      "id": "VENT005",
      "category": "호흡기/HFNC",
      "title": "HFNC / Airvo",
      "aliases": [
        "HFNC",
        "Airvo",
        "하이플로우",
        "high flow",
        "FiO2"
      ],
      "urgency": "urgent",
      "summary": "HFNC 적용 및 Airvo 관리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "산소요법 적용 시 피부 보호 폼 적용",
        "예시: 60L flow / FiO2 1.0",
        "Airvo filter 교체 후 날짜 기입",
        "O2 tapering/변동 시 기록, 간호처방, V/S 메모 수정"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "피부 손상 예방 폼 적용"
      ],
      "related": [],
      "tags": [
        "호흡기/HFNC",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin000e.png",
          "alt": "산소요법(O2) 참고 표",
          "caption": "산소요법(O2) 참고 표"
        }
      ]
    },
    {
      "id": "VENT006",
      "category": "호흡기/Suction",
      "title": "Suction / 간호 흡인",
      "aliases": [
        "Suction",
        "석션",
        "흡인",
        "분비물",
        "ET suction",
        "T-tube suction",
        "oral suction",
        "sputum",
        "가래",
        "흡인압"
      ],
      "urgency": "urgent",
      "summary": "분비물 배출과 기도 유지를 위한 suction.",
      "indications": [],
      "preparation": [
        "장갑",
        "Airway",
        "설압자",
        "30cc N/S",
        "멸균 흡입카테터",
        "필요 시 PPE"
      ],
      "steps": [
        "의식 있으면 반좌위, 없으면 머리 옆으로",
        "Vent 환자는 흡인 전후 100% 산소 보충",
        "산소요법 환자는 30초 과산소화",
        "카테터 잠근 상태로 삽입 후 돌리며 흡인",
        "1회 15초 이내, 간격 20~30초, 총 5분 이내",
        "카테터는 매번 교환"
      ],
      "dosage_or_mix": [
        "흡인압: 영아 60~80mmHg, 어린이/노인 80~120mmHg, 성인 120~200mmHg"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "점막손상/저산소 주의"
      ],
      "related": [],
      "tags": [
        "호흡기/Suction",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06",
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "VENT007",
      "category": "호흡기/Tracheostomy",
      "title": "Tracheostomy care / 기관절개관 간호",
      "aliases": [
        "Tracheostomy",
        "T-tube",
        "T-can",
        "기관절개",
        "기관절개관",
        "내관"
      ],
      "urgency": "urgent",
      "summary": "기관절개관 피부보호, 감염예방, 폐쇄예방.",
      "indications": [],
      "preparation": [
        "소공포",
        "소독솜",
        "멸균 Y-gauze",
        "Glove",
        "반창고",
        "Tubifix",
        "필요 시 PPE"
      ],
      "steps": [
        "매 근무마다 gauze 교환 및 내관 소독",
        "기관절개 부위 소독",
        "피부상태 확인",
        "내관 교환",
        "Tubifix 끈은 손가락 2개 정도 들어가게 묶음",
        "Gauze 젖으면 즉시 교환"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "기관절개관 폐쇄 예방",
        "젖은 gauze 즉시 교환"
      ],
      "related": [],
      "tags": [
        "호흡기/Tracheostomy",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "VENT008",
      "category": "검사/EKG",
      "title": "EKG monitoring / ETCO2",
      "aliases": [
        "EKG",
        "ECG",
        "심전도",
        "ETCO2",
        "monitoring",
        "ROSC"
      ],
      "urgency": "urgent",
      "summary": "EKG monitoring과 ETCO2 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "EKG speed 25mm/sec 확인",
        "전극 위치 확인",
        "PACS 연동 확인",
        "모니터 electrode 위치 확인",
        "ETCO2 정상범위 35~45mmHg 확인"
      ],
      "dosage_or_mix": [
        "ETCO2 정상: 35~45mmHg",
        "CPR 중 흉부압박이 잘 되면 ETCO2 20mmHg 이상 측정 가능"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "ETCO2 갑자기 증가 시 ROSC 가능성",
        "삽관 후 ETCO2 감소/미측정 시 식도삽관 가능성 확인"
      ],
      "related": [],
      "tags": [
        "검사/EKG",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0012.png",
          "alt": "Bedside monitor 예시 사진",
          "caption": "Bedside monitor 예시 사진"
        }
      ]
    },
    {
      "id": "TF001",
      "category": "수혈",
      "title": "수혈 준비/혈액 요청",
      "aliases": [
        "수혈",
        "혈액요청서",
        "cross matching",
        "ABO",
        "Rh",
        "irregular",
        "P-RBC"
      ],
      "urgency": "urgent",
      "summary": "수혈 처방 후 검체/요청/불출 준비.",
      "indications": [],
      "preparation": [
        "수혈동의서",
        "혈액요청서(EMR)",
        "Plain bottle 2개",
        "EDTA bottle 1개",
        "검체 라벨",
        "수혈기록지"
      ],
      "steps": [
        "수혈동의서 확인",
        "ABO/Rh, irregular, cross matching 처방 확인",
        "혈액요청서와 검체 이름 확인",
        "검체와 요청서를 고무줄로 묶어 진검실로 보냄",
        "보낸 후 진검실 연락",
        "P-RBC 불출 시 ice pack 포함"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "채혈자/대상자 이름 일치 확인",
        "Cross matching 72시간 기준 확인"
      ],
      "related": [],
      "tags": [
        "수혈",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "TF002",
      "category": "수혈",
      "title": "수혈 절차 상세",
      "aliases": [
        "수혈",
        "P-RBC",
        "FFP",
        "A-PLT",
        "수혈기록지",
        "수혈 V/S",
        "혈액요청서",
        "수혈 tip",
        "수혈 전처치",
        "수혈기록",
        "수혈 확인",
        "blood start",
        "15분 V/S",
        "수혈 부작용",
        "혈액 불출",
        "진검실"
      ],
      "urgency": "urgent",
      "summary": "수혈 준비, 불출, 시작, 기록, I/O 입력 절차.",
      "indications": [],
      "preparation": [
        "혈액요청서(EMR)",
        "빨강 bottle 2개",
        "보라 bottle 1개",
        "수혈기록지",
        "혈액박스"
      ],
      "steps": [
        "처방 확인 후 혈액요청서와 검체를 준비한다.",
        "P-RBC + 교차시험 처방세트, ABO+Rh, irregular, 수혈용 추가 생성 확인",
        "채혈자, 혈액요청서 이름, 검체 라벨을 대조한다.",
        "혈액요청서와 검체를 고무줄로 묶어 진검실로 보낸다.",
        "보낸 후 진검실에 연락해 확인을 요청한다.",
        "P-RBC 불출 시 ice pack 포함 여부를 확인한다.",
        "혈액정보 라벨을 수혈기록지에 붙인다.",
        "수혈 시작, 15분 후, 종료 시 V/S와 간호기록/V/S 메모를 입력한다.",
        "수혈기록지 수혈번호와 수혈일자를 확인 후 스캔한다.",
        "I/O에 Blood 종류와 용량을 입력한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "수혈 부작용 의심 시 즉시 중단, 정맥로 유지, 담당의와 진검실에 보고합니다."
      ],
      "related": [],
      "tags": [
        "수혈",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 수혈"
      ],
      "tables": [
        {
          "title": "수혈 V/S 및 기록 포인트",
          "headers": [
            "시점",
            "확인/기록"
          ],
          "rows": [
            [
              "수혈 전",
              "동의서, 혈액요청서, 혈액정보, 환자확인, V/S"
            ],
            [
              "시작 직후",
              "부작용 증상 관찰"
            ],
            [
              "15분 후",
              "V/S, 발열/오한/발진/호흡곤란 확인"
            ],
            [
              "종료 시",
              "V/S, 수혈기록지, I/O blood 용량 입력"
            ],
            [
              "부작용 의심",
              "즉시 중단, 정맥로 유지, 담당의/진검실 보고"
            ]
          ]
        }
      ],
      "images": [
        {
          "src": "bin000f.png",
          "alt": "수혈 관련 참고 표",
          "caption": "수혈 관련 참고 표"
        }
      ]
    },
    {
      "id": "TF003",
      "category": "수혈",
      "title": "혈액제제 요약",
      "aliases": [
        "P-RBC",
        "FFP",
        "PC",
        "A-PLT",
        "Cryo",
        "혈액제제"
      ],
      "urgency": "urgent",
      "summary": "혈액제제별 실무 요약.",
      "indications": [],
      "preparation": [],
      "steps": [
        "RBC: Hb 보충, 냉장, 1.5~3hr 투여, 기대 Hb 약 1g/dL 상승",
        "PC: PLT 보충, 실온, full drop",
        "A-PLT: PLT 보충, 실온, full drop",
        "FFP: PT/INR 보정, 냉장, 1~2hr",
        "Cryo: fibrinogen 보충, 냉장, full drop"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "PC/APLT는 ice pack 필요 없음",
        "수혈 filter는 2팩까지 사용 기준 확인"
      ],
      "related": [],
      "tags": [
        "수혈",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC001",
      "category": "기본간호/L-tube",
      "title": "L-tube feeding",
      "aliases": [
        "L-tube",
        "엘튜브",
        "feeding",
        "경관식",
        "RTH",
        "비위관"
      ],
      "urgency": "routine",
      "summary": "비위관 영양 공급.",
      "indications": [],
      "preparation": [
        "미온수",
        "처방된 유동식(RTH)",
        "청진기",
        "50cc 세정용 주사기",
        "수건",
        "휴지"
      ],
      "steps": [
        "필요 시 feeding 전 suction",
        "상체 30도 이상",
        "주입 전 위 내용물 흡인으로 소화/위치 확인",
        "흡인 안 되면 공기 주입 청진, 필요 시 X-ray",
        "물 30cc → 유동식 → 물 30cc 순서로 중력 주입",
        "주입 후 30분~1시간 앉은 자세 유지"
      ],
      "dosage_or_mix": [
        "주입속도 분당 약 50ml 이하",
        "삽입길이: 코끝~귓불 + 귓불~검상돌기"
      ],
      "orders_or_emr": [],
      "charting": [
        "주입시간, 종류, 양, 환자반응, 관찰사항 기록"
      ],
      "io": [],
      "warnings": [
        "오심/구토/복부팽만 시 속도 줄이거나 중지",
        "주입속도 빠르면 설사/탈수 유발"
      ],
      "related": [],
      "tags": [
        "기본간호/L-tube",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC002",
      "category": "기본간호/Enema",
      "title": "Enema / 관장",
      "aliases": [
        "관장",
        "Enema",
        "글리세린",
        "finger enema",
        "칼리메이트",
        "듀파락"
      ],
      "urgency": "routine",
      "summary": "배변 유도/수술 전 장준비/치료 목적 관장.",
      "indications": [],
      "preparation": [
        "관장액",
        "비닐장갑",
        "Puspen",
        "윤활제",
        "직장튜브",
        "휴지",
        "패드"
      ],
      "steps": [
        "관장액은 약 40도 정도로 준비",
        "왼쪽 측위/심즈체위",
        "튜브 끝에 윤활제 5~7cm 적용",
        "직장튜브 8~10cm 삽입",
        "관장액 주입 후 가능하면 5~10분 보유",
        "Finger enema 시 윤활제 적용 후 항문 마사지 및 대변 제거"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "관장시간, 관장액 종류와 양, 환자 반응, 검사물 보낸 시간 기록"
      ],
      "io": [],
      "warnings": [
        "복통, 오심, 어지러움, 항문 불편감 확인"
      ],
      "related": [],
      "tags": [
        "기본간호/Enema",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC003",
      "category": "기본간호/Foley",
      "title": "Foley catheter insertion",
      "aliases": [
        "Foley",
        "폴리",
        "유치도뇨",
        "Urine bag",
        "도뇨"
      ],
      "urgency": "routine",
      "summary": "유치도뇨 삽입 준비와 유지관리.",
      "indications": [],
      "preparation": [
        "Foley set",
        "소독장갑",
        "도뇨관",
        "소독솜",
        "멸균증류수",
        "윤활제",
        "Multi-fix",
        "Urine bag",
        "10cc syringe"
      ],
      "steps": [
        "Balloon에 멸균증류수 8~10cc 주입해 누출 확인",
        "무균적으로 요도구 소독",
        "윤활제 적용",
        "여성 3~5cm, 남성 15~17cm 또는 소변 배출까지 삽입",
        "Ballooning 후 살짝 당겨 고정 확인, 다시 2~3cm 밀어 넣음",
        "Urine bag은 침상보다 낮게 고정"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "삽입 날짜/시간, 소변량과 색깔, 환자 반응, 검체 채취 여부 기록"
      ],
      "io": [],
      "warnings": [
        "Balloon은 N/S가 아닌 증류수",
        "폐쇄계 유지",
        "소변백은 방광보다 낮게"
      ],
      "related": [],
      "tags": [
        "기본간호/Foley",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC004",
      "category": "검사/소변검체",
      "title": "Foley urine specimen collection",
      "aliases": [
        "소변검체",
        "Urine culture",
        "Urine Cx",
        "UA",
        "Foley port",
        "검체"
      ],
      "urgency": "routine",
      "summary": "Foley catheter에서 무균적으로 소변검체 채취.",
      "indications": [],
      "preparation": [
        "멸균 glove",
        "포비돈 스틱",
        "10cc syringe",
        "소변검체 채취통",
        "바코드"
      ],
      "steps": [
        "검체 채취 전 Foley line 잠금",
        "검체 port를 포비돈 스틱으로 소독",
        "10cc syringe로 port에서 무균적으로 채취",
        "멸균용기에 담고 바코드 부착",
        "즉시 검사실 접수"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "검체 색깔, 냄새, 관찰사항 기록"
      ],
      "io": [],
      "warnings": [
        "Urine bag에서 직접 채취하지 않기",
        "Port 소독 후 채취"
      ],
      "related": [],
      "tags": [
        "검사/소변검체",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC005",
      "category": "기본간호/Oral care",
      "title": "Oral care / 구강간호",
      "aliases": [
        "Oral care",
        "구강간호",
        "바세린",
        "참스틱",
        "흡인"
      ],
      "urgency": "routine",
      "summary": "구강청결/상기도 감염 예방을 위한 구강간호.",
      "indications": [],
      "preparation": [
        "칫솔/구강스펀지",
        "곡반",
        "수건",
        "가글액",
        "면봉",
        "윤활제",
        "설압자",
        "거즈",
        "forcep",
        "penlight",
        "흡인기"
      ],
      "steps": [
        "흡인기 준비",
        "측위 가능 시 측위",
        "구강상태 사정",
        "치아/입천장/잇몸/볼 안쪽/혀 닦기",
        "분비물 흡인",
        "입술에 바셀린 적용"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "구강 색깔, 모양, 냄새, 관찰사항 기록"
      ],
      "io": [],
      "warnings": [
        "흡인 위험 환자는 자세와 흡인기 준비 필수",
        "구토반사 주의"
      ],
      "related": [],
      "tags": [
        "기본간호/Oral care",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC006",
      "category": "투약/IM",
      "title": "Intramuscular injection / 근육주사",
      "aliases": [
        "IM",
        "근육주사",
        "intramuscular injection",
        "페치딘"
      ],
      "urgency": "routine",
      "summary": "근육주사 시행과 기록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 확인 후 약물 준비",
        "환자/라벨/등록번호 확인",
        "주사부위 선정 및 소독",
        "90도 각도로 삽입",
        "내관을 2~3mm 당겨 혈액 역류 확인",
        "혈액 없으면 서서히 주입",
        "바늘 제거 후 부드럽게 마사지",
        "부작용 관찰"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "약제명, 용량, 투여경로, 수행결과, 통증점수 기록"
      ],
      "io": [],
      "warnings": [
        "1회 주사량 5cc 이상인 경우 나누어 주사",
        "좌골신경 가까이 주사 주의"
      ],
      "related": [],
      "tags": [
        "투약/IM",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "BASIC007",
      "category": "투약/Insulin",
      "title": "Insulin injection / 인슐린 주사",
      "aliases": [
        "인슐린",
        "Insulin",
        "휴물린",
        "BST",
        "피하주사",
        "SC"
      ],
      "urgency": "routine",
      "summary": "인슐린 주사와 혈당기록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "인슐린 유효기간 확인",
        "개봉 후 28일 확인",
        "펜을 양 손바닥 사이에서 10회 굴림",
        "위아래로 10회 부드럽게 흔들어 혼합",
        "고무마개 소독",
        "주사바늘 장착",
        "처방 용량 설정 후 주사",
        "주사 후 바늘 제거"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "주사시간, 약명, 주사방법, 혈당기록, 주사 위치 rotation, 수행결과"
      ],
      "io": [],
      "warnings": [
        "저혈당 증상 발생 시 즉시 보고/처치"
      ],
      "related": [],
      "tags": [
        "투약/Insulin",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "CRRT001",
      "category": "CRRT",
      "title": "CRRT Return / Kit change 상세",
      "aliases": [
        "CRRT",
        "return",
        "리턴",
        "kit change",
        "filter",
        "TMP",
        "access pressure",
        "씨알알티",
        "circuit change",
        "filter change",
        "return blood",
        "혈액재주입",
        "kit 교체",
        "CRRT 알람",
        "TMP 상승",
        "return pressure"
      ],
      "urgency": "urgent",
      "summary": "CRRT filter 압력 상승 또는 kit 교체 시 return/재시작.",
      "indications": [],
      "preparation": [
        "NS 500ml",
        "CRRT kit",
        "처방 fluid",
        "Urine bag/kit bag",
        "Line clamp 확인"
      ],
      "steps": [
        "Kit 교체 전 CRRT I/O를 끊는다.",
        "치료중단 선택 후 return 준비",
        "NS 500ml를 access line 3-way에 연결한다.",
        "3-way 방향을 확인하고 혈액 재주입을 진행한다.",
        "Return 완료 후 환자와 장비를 분리한다.",
        "새 kit setting, 기능테스트, rinse를 진행한다.",
        "Pre line 빨간색, post line 파란색 연결을 확인한다.",
        "환자 연결 후 CRRT를 재시작하고 pressure와 alarm을 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "NS 500은 빠르게 들어갈 수 있어 앞에서 대기합니다. BP 낮으면 UF 조정 여부를 확인합니다."
      ],
      "related": [],
      "tags": [
        "CRRT",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 CRRT"
      ],
      "tables": [
        {
          "title": "CRRT Return / Kit change 핵심 확인",
          "headers": [
            "단계",
            "확인사항"
          ],
          "rows": [
            [
              "중단 전",
              "CRRT I/O 끊기, pressure/alarm 확인"
            ],
            [
              "Return",
              "NS 500ml 연결, 3-way 방향 확인, 혈액 재주입"
            ],
            [
              "분리",
              "Return 완료 후 환자와 장비 분리"
            ],
            [
              "재시작",
              "새 kit setting, 기능테스트, rinse, line 색상 확인"
            ],
            [
              "관찰",
              "BP, pressure, alarm, UF 상태 확인"
            ]
          ]
        }
      ],
      "images": []
    },
    {
      "id": "CPR001",
      "category": "응급/CPR",
      "title": "CPR quick card",
      "aliases": [
        "CPR",
        "code blue",
        "심정지",
        "arrest",
        "ROSC",
        "Lucas",
        "Ambu",
        "에피",
        "심폐소생술",
        "코드블루",
        "compression",
        "제세동",
        "ambu bagging",
        "CPR charting"
      ],
      "urgency": "emergency",
      "summary": "CPR 시 핵심 주기, 장비, 기록 체크리스트.",
      "indications": [],
      "preparation": [
        "Lucas",
        "I-gel 또는 intubation 준비",
        "Ambu",
        "Epinephrine",
        "Bivon",
        "NS",
        "CPR 모니터링 기록지"
      ],
      "steps": [
        "Lucas 시작시간 확인",
        "I-gel 또는 intubation 준비",
        "Advanced airway 적용 시 Ambu 6초마다 1회",
        "Advanced airway 없으면 30:2",
        "2분마다 pulse check",
        "Epinephrine은 3~5분마다 또는 병원 protocol 기준 확인",
        "ROSC 후 vent 연결 고려"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "CPR 기록지와 사용 약물 시간 일치",
        "담당의 지시와 병원 최신 프로토콜 우선"
      ],
      "related": [],
      "tags": [
        "응급/CPR",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 2026-06-06"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "NEURO001",
      "category": "신경계/Brain",
      "title": "Brain patient care / 신경외과 환자",
      "aliases": [
        "Brain",
        "NS",
        "GCS",
        "LOC",
        "Motor",
        "BP target",
        "IICP"
      ],
      "urgency": "urgent",
      "summary": "신경외과 환자의 의식수준과 BP target 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "GCS 및 LOC 사정",
        "15점 Alert, 13~14점 Drowsy, 8~12점 Stupor, 4~7점 Semi-coma, 3점 이하 Coma로 판단",
        "BP target은 지시처방 확인",
        "혈압상승은 재출혈 또는 뇌압상승 가능성 고려"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "GCS, LOC, Motor, BP, neuro change 기록"
      ],
      "io": [],
      "warnings": [
        "NS 환자 혈압상승은 재출혈/IICP 징후 가능"
      ],
      "related": [],
      "tags": [
        "신경계/Brain",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC001",
      "category": "검사/TFCA",
      "title": "TFCA care / 뇌혈관조영술 전후 간호",
      "aliases": [
        "TFCA",
        "TRCA",
        "뇌혈관조영술",
        "angio",
        "sand bag",
        "ABR"
      ],
      "urgency": "urgent",
      "summary": "TFCA 검사 전 준비와 검사 후 site/V/S/ABR 확인.",
      "indications": [],
      "preparation": [
        "동의서",
        "Both inguinal shaving",
        "Dorsalis pedis artery 확인",
        "N/S 1L 18G Lt arm",
        "모래주머니",
        "검사 전 체크리스트"
      ],
      "steps": [
        "동의서 확인",
        "Dorsalis pedis artery 확인",
        "Lt arm 18G IV 확보",
        "검사 전 V/S 확인",
        "Post V/S check",
        "시술부위 oozing/bleeding/hematoma 확인",
        "6~8hr ABR 및 sand bag 적용",
        "6시간 후 복압 test로 site oozing 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "시술부위 다리 구부리지 않도록 교육",
        "출혈 시 즉시 알리도록 설명"
      ],
      "related": [],
      "tags": [
        "검사/TFCA",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "LINE001",
      "category": "Line/Chemoport",
      "title": "Chemoport needle insertion/removal",
      "aliases": [
        "Chemoport",
        "케모포트",
        "port needle",
        "heparin",
        "regurge"
      ],
      "urgency": "routine",
      "summary": "Chemoport needle 삽입과 제거.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 glove",
        "10cc syringe",
        "N/S 20cc",
        "Port needle",
        "Op site",
        "1:100 heparin"
      ],
      "steps": [
        "Needle에 N/S priming",
        "Insertion site 소독",
        "Portal septum 고정",
        "Needle을 직각 삽입",
        "Regurge로 blood return 확인",
        "수액 연결 확인",
        "제거 시 1:100 heparin 5~8ml 주입"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "제거 시 air embolism 주의"
      ],
      "related": [],
      "tags": [
        "Line/Chemoport",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SKIN001",
      "category": "상처/욕창",
      "title": "Pressure injury care / 욕창간호",
      "aliases": [
        "욕창",
        "Pressure injury",
        "sore",
        "DTI",
        "체위변경",
        "Braden"
      ],
      "urgency": "routine",
      "summary": "욕창 예방과 단계별 관리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "욕창 위험요인 확인",
        "호발 부위 확인: 천골, 미골, 발꿈치, 팔꿈치, 대전자 등",
        "2시간마다 체위변경",
        "침대 머리는 가능하면 30도 이하",
        "실금/실변 관리",
        "건조 피부 보습제 사용",
        "압력 재분산 보조기 사용"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "욕창 단계, 부위, 크기/양상, 체위변경, 예방/관리활동 기록"
      ],
      "io": [],
      "warnings": [
        "욕창 부위 마사지 금지",
        "발적 부위 압박 지속 금지"
      ],
      "related": [],
      "tags": [
        "상처/욕창",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "OP001",
      "category": "수술간호/Pre-op",
      "title": "Pre-op care / 수술 전 간호",
      "aliases": [
        "Pre-op",
        "수술 전",
        "수술전간호",
        "체크리스트",
        "동의서",
        "표식확인"
      ],
      "urgency": "routine",
      "summary": "수술 전 검사, 동의서, IV, 체크리스트 확인.",
      "indications": [],
      "preparation": [
        "수술동의서",
        "수술표식/표식지",
        "PCA 동의서",
        "수술 전 체크리스트",
        "항생제",
        "보조기",
        "18G IV"
      ],
      "steps": [
        "수술 lab, Chest PA, EKG 확인",
        "항생제 반응검사 확인",
        "금식/정체도뇨관 필요성 설명 및 시행",
        "18G IV 확보",
        "부착물 제거",
        "수술 전 V/S 확인",
        "수술 전 처치 체크리스트 입력·출력",
        "항생제와 서류를 파일에 끼워 수술실로 보냄"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "동의서, 표식, 체크리스트 누락 주의"
      ],
      "related": [],
      "tags": [
        "수술간호/Pre-op",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "OP002",
      "category": "수술간호/Post-op NS Spine",
      "title": "Post-op NS Spine / 척추수술 후 간호",
      "aliases": [
        "Post-op",
        "NS spine",
        "PLIF",
        "DLIF",
        "ACDF",
        "Fusion",
        "JP",
        "Hemovac"
      ],
      "urgency": "routine",
      "summary": "NS spine 수술 후 OP day~POD별 기본 확인.",
      "indications": [],
      "preparation": [
        "EKG monitoring",
        "DVT pump",
        "항혈전스타킹",
        "JP/Hemovac 확인",
        "수술 후 처방 확인"
      ],
      "steps": [
        "OP day/POD별 fluid/injection/PO 처방 확인",
        "Post CBC 및 POD lab 확인",
        "POD#1 Chest PA 등 방사선 처방 확인",
        "JP/Hemovac 양상 및 압력 확인",
        "DVT 예방 처치 확인",
        "Cervical anterior OP는 호흡곤란/답답함/허스키한 목소리 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "Anterior cervical OP는 혈종/부종으로 인한 호흡장애 관찰"
      ],
      "related": [],
      "tags": [
        "수술간호/Post-op NS Spine",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "OP003",
      "category": "수술간호/Post-op OS",
      "title": "Post-op OS / 정형외과 수술 후 간호",
      "aliases": [
        "OS post-op",
        "TKRA",
        "THRA",
        "TSRA",
        "TARA",
        "Bipolar",
        "Hemovac"
      ],
      "urgency": "routine",
      "summary": "OS 수술 후 항응고, drain, lab/radiology 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "OP day/POD별 fluid, injection, PO 처방 확인",
        "수술별 X-ray 확인",
        "POD lab 확인",
        "Hemovac pressure/natural/clamping 기준 확인",
        "TKRA는 POD#2 CPM start, POD#7 도수치료 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "항응고제 기준은 처방 확인",
        "Drain 제거/압력 기준은 주치의 지시 우선"
      ],
      "related": [],
      "tags": [
        "수술간호/Post-op OS",
        "v8_final_reviewed"
      ],
      "review": {
        "status": "final_reviewed",
        "rule": "원본 확인 가능 + 중복 제거 + 실무 검색 최적화 + 평가표/서명란/점수 제거"
      },
      "source_refs": [
        "신규(경력직) OJT 집중치료실"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE018",
      "category": "Routine/제세동기",
      "title": "제세동기 점검 상세",
      "aliases": [
        "제세동기",
        "defibrillator",
        "자가점검",
        "manual defib",
        "E-cart"
      ],
      "urgency": "routine",
      "summary": "Night 자정 이후 제세동기 자가점검 절차.",
      "indications": [],
      "preparation": [],
      "steps": [
        "제세동기 전원을 켠다.",
        "설정 버튼을 누른다.",
        "다이얼을 돌려 기타 사용자 테스트를 선택한다.",
        "예 → 자가점검 → 시작 순서로 진행한다.",
        "자가점검 출력물이 나오면 다이얼로 나간다.",
        "다시 시작 → 예 → 매뉴얼 제세동 에너지 선택을 확인한다.",
        "충전 후 제세동 손잡이 버튼을 눌러 J 확인한다.",
        "출력물 2장에 이름과 날짜를 적어 붙인다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "제세동기 실제 shock 테스트는 병동 장비 점검 지침을 따릅니다."
      ],
      "related": [],
      "tags": [
        "Routine/제세동기",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 Routine Job / 자정 이후 제세동기"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE019",
      "category": "Routine/Lab bottle",
      "title": "Lab bottle 검사·채취 방법",
      "aliases": [
        "Lab bottle",
        "채혈병",
        "검체",
        "SST",
        "EDTA",
        "Sodium Citrate",
        "Plain",
        "채취방법"
      ],
      "urgency": "routine",
      "summary": "검체 채취 전 bottle 종류와 채혈 순서를 확인하는 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방된 검사 항목을 확인하고 필요한 bottle을 준비한다.",
        "환자 확인 후 검체 라벨과 대상자를 대조한다.",
        "Sodium citrate tube는 정량선까지 정확히 채운다.",
        "채취 후 bottle을 적절히 혼합하고, 라벨은 눈금을 가리지 않게 부착한다.",
        "검체 접수/전송 시간을 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 bottle과 채혈 순서는 병원 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "Routine/Lab bottle",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE020",
      "category": "Routine/식이",
      "title": "식이 처방·Feeding 확인",
      "aliases": [
        "식이",
        "diet",
        "feeding",
        "NPO",
        "금식",
        "경관식",
        "L-tube feeding"
      ],
      "urgency": "routine",
      "summary": "식이 처방, 금식, 경관식, I/O 입력을 함께 확인하는 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "근무 시작 시 식이 처방과 NPO 여부를 확인한다.",
        "검사/시술/수술 전 금식 여부를 확인한다.",
        "L-tube feeding 환자는 주입 전 잔류량/위치 확인 기준을 따른다.",
        "식이 변경 또는 중단 시 간호기록과 인계사항에 반영한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [
        "식사량 또는 feeding 양은 병동 I/O 기준에 따라 입력한다."
      ],
      "warnings": [
        "흡인 위험 환자는 자세, 잔류량, 의식상태를 확인합니다."
      ],
      "related": [],
      "tags": [
        "Routine/식이",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE021",
      "category": "Routine/환자파악·인계",
      "title": "환자 파악 및 인계 체크리스트",
      "aliases": [
        "환자파악",
        "인계",
        "handover",
        "rounding",
        "라인",
        "진단명",
        "문제목록"
      ],
      "urgency": "routine",
      "summary": "근무 시작 전 환자 상태와 주요 처방을 빠르게 파악하는 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "진단명, 수술/시술명, 입원 경로, 주치의/협진과를 확인한다.",
        "의식상태, 호흡기 상태, hemodynamic, line/tube/drain을 확인한다.",
        "주요 약물, 수액, 항생제, 승압제, 진정제, 항응고제를 확인한다.",
        "검사 예정, 수술/시술 예정, 금식, 동의서 여부를 확인한다.",
        "주의사항과 보호자/연명의료/DNR 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "인계받은 특이사항은 필요한 경우 간호기록 또는 인계장에 정리한다."
      ],
      "io": [],
      "warnings": [
        "병원 최신 지침과 담당의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "Routine/환자파악·인계",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ROUTINE022",
      "category": "Routine/Acting",
      "title": "ACTING 업무: 술기·Injection·기타",
      "aliases": [
        "acting",
        "액팅",
        "injection",
        "술기",
        "처치",
        "투약",
        "간호액팅"
      ],
      "urgency": "routine",
      "summary": "근무 중 액팅 업무를 누락 없이 확인하는 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "간호액팅 스케줄을 시간대별로 확인한다.",
        "Injection/PO/nebulizer/dressing/feeding/검체 등 항목을 분류한다.",
        "시행 전 환자, 약물, 용량, 경로, 시간을 확인한다.",
        "시행 후 효과, 부작용, 미시행 사유를 기록한다.",
        "추가 처방 발생 시 응급발행/픽업/스케줄 반영 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "투약은 5 right/7 right 원칙과 병원 투약지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "Routine/Acting",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ADM001",
      "category": "입원·전입",
      "title": "ICU 입원 시 절차 / 신환 전입 역할분담",
      "aliases": [
        "입실",
        "전입",
        "응급실",
        "외래",
        "병동",
        "ICU admission",
        "신환",
        "입원 시 절차",
        "ER ICU",
        "GW ICU",
        "간호정보조사",
        "손목팔찌",
        "화재 3군",
        "화재스티커",
        "중앙모니터",
        "병록번호",
        "stand by",
        "Screen setup",
        "multi bed",
        "tile layout",
        "RAT",
        "VRE",
        "CRE",
        "CPO",
        "MRSA",
        "MSSA",
        "보호자 전화번호",
        "AI trics",
        "입원 안내문",
        "자가약",
        "지참약 식별",
        "입실시간"
      ],
      "urgency": "routine",
      "summary": "신환 또는 전입 환자 ICU 입실 시 모니터 세팅, 감염검사 확인, 보호자 안내, 초기평가, 역할분담 절차.",
      "indications": [],
      "preparation": [],
      "steps": [
        "손목 팔찌 확인 후 화재 3군 스티커를 적용한다.",
        "중앙모니터에 병록번호와 환자명을 입력하고 standby 상태로 세팅한다.",
        "중앙모니터 설정에서 Screen setup → multi bed → tile layout을 확인한다.",
        "ECG, RR, NIBP, SpO2 모니터링 위치와 연결 상태를 확인한다.",
        "환자가 도착하면 담당 간호사는 보호자에게 간호정보조사를 시행한다.",
        "ER/GW에서 ICU로 올 때 RAT, VRE, CRE, CPO, MRSA/MSSA 검사 시행 여부를 확인하고 특이사항에 메모한다.",
        "PCI, Coil embolization 제외하고 보호자 2인 전화번호를 메모한다.",
        "간호정보조사, 낙상 예방확인서, 신체보호대 동의서, AI trics 동의 여부를 확인한다.",
        "입원 안내문과 물품 안내문을 출력하고 보호자에게 설명한다.",
        "자가약이 있으면 식별 의뢰 후 지참약 관리 의뢰서를 인쇄한다.",
        "낙상, 욕창, 통증 초기평가, Bundle, 간호정보조사는 입실 시간 기준으로 정리한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "AI trics 동의 시 간호기록: AI trics monitoring 중임.",
        "응급실 간호기록지의 ICU 보낸 차팅 시간 기준으로 입실시간을 확인한다.",
        "입실 후 간호기록, 기본간호, Flow sheet를 정리한다."
      ],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "입퇴원/입실",
        "v10_master_30_categories",
        "입원·전입",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ],
      "tables": [
        {
          "title": "신환 입원 / 전입 시 역할분담",
          "headers": [
            "역할",
            "업무"
          ],
          "rows": [
            [
              "담당 간호사",
              "환자 전체 사정, EMR, 간호정보조사, 자가약 확인, 동의서, 물품 안내, 라벨/검체 바코드 출력, 담당 환자 액팅"
            ],
            [
              "나머지 근무자",
              "환자 정리, line, 배액관, Foley, 욕창 포함 피부상태 확인 후 담당에게 전달"
            ],
            [
              "인계 정리",
              "ICU flowsheet(new) 기반 인계, NS/NR 환자는 GCS·pupil qhr 사정 기입"
            ],
            [
              "요약/Cadex",
              "당일 인계 내용, 진단명, 누적해서 챙겨야 할 내용 작성"
            ]
          ]
        }
      ],
      "images": []
    },
    {
      "id": "ADM002",
      "category": "입퇴원/전동·전원",
      "title": "전동·전원 업무",
      "aliases": [
        "전동",
        "전원",
        "transfer",
        "병동 이동",
        "타병원 전원"
      ],
      "urgency": "urgent",
      "summary": "ICU에서 병동 또는 타기관으로 이동 시 확인할 사항.",
      "indications": [],
      "preparation": [],
      "steps": [
        "전동/전원 처방과 이동 시간을 확인한다.",
        "이송 가능 상태인지 V/S, 산소, line, drain, 약물 주입 상태를 확인한다.",
        "전동 인계지 또는 전원 서류를 준비한다.",
        "검사결과, 약물, 지참약, 동의서, 영상자료 필요 여부를 확인한다.",
        "이동 전 보호자 및 수납/행정 절차를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "전동/전원 시간, 인계 대상, 환자 상태, 동반 물품을 기록한다."
      ],
      "io": [],
      "warnings": [
        "병원 최신 지침과 담당의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "입퇴원/전동·전원",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ADM003",
      "category": "입퇴원/사망",
      "title": "사망 시 업무",
      "aliases": [
        "사망",
        "death",
        "사후처치",
        "영안실",
        "사망진단서"
      ],
      "urgency": "urgent",
      "summary": "사망 확인 후 간호·전산·보호자 안내 업무.",
      "indications": [],
      "preparation": [],
      "steps": [
        "의사의 사망 확인 및 사망선고 시간을 확인한다.",
        "모니터, line, tube 제거 여부는 병원 절차와 의사 지시를 따른다.",
        "보호자 안내, 사망진단서, 영안실 연락 등 행정 절차를 확인한다.",
        "사후처치를 시행하고 개인물품을 정리한다.",
        "필요 시 감염/격리 사망 절차를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [
        "사망선고 시간, 사후처치, 보호자 안내, 인계 내용을 기록한다."
      ],
      "io": [],
      "warnings": [
        "사망 관련 서류와 절차는 병원 원무/장례 절차를 우선합니다."
      ],
      "related": [],
      "tags": [
        "입퇴원/사망",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "RECORD001",
      "category": "간호기록",
      "title": "간호기록 작성 원칙",
      "aliases": [
        "간호기록",
        "기록",
        "nursing note",
        "charting",
        "EMR"
      ],
      "urgency": "routine",
      "summary": "ICU 간호기록 작성 시 기본 원칙.",
      "indications": [],
      "preparation": [],
      "steps": [
        "사실 중심으로 시간 순서에 맞춰 기록한다.",
        "환자 상태 변화, 처치, 투약, 보고, 의사 지시, 환자 반응을 기록한다.",
        "약물 시작/중단/용량변경, 검사/시술 전후 상태를 기록한다.",
        "미시행 사유, 거부, 이상반응, 보호자 설명 내용을 기록한다.",
        "전산의 다른 항목(V/S, I/O, flow sheet)과 내용이 맞는지 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "법적 기록이므로 추측·주관적 표현보다 관찰 사실과 조치 중심으로 작성합니다."
      ],
      "related": [],
      "tags": [
        "간호기록",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ORDER001",
      "category": "처방/액팅",
      "title": "처방 확인·Lab 처방·픽업·응급발행",
      "aliases": [
        "처방",
        "액팅",
        "lab 처방",
        "픽업",
        "응급발행",
        "채혈접수",
        "발행"
      ],
      "urgency": "routine",
      "summary": "처방 확인부터 채혈접수/픽업/응급발행까지 흐름.",
      "indications": [],
      "preparation": [],
      "steps": [
        "신규/변경/중지 처방을 확인한다.",
        "Lab 처방은 채혈접수업무에서 접수 및 바코드 발행 여부를 확인한다.",
        "추가 처방은 병동 기준에 따라 응급발행 또는 픽업을 진행한다.",
        "약물 처방은 용량/경로/시간/희석방법을 확인한다.",
        "시행 후 간호액팅 완료 여부와 기록을 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "처방 의문사항은 시행 전 담당의 또는 처방권자에게 확인합니다."
      ],
      "related": [],
      "tags": [
        "처방/액팅",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SAFE001",
      "category": "안전/유효기간",
      "title": "유효기간·사용기한 확인",
      "aliases": [
        "유효기간",
        "사용기한",
        "개봉일",
        "폐기일",
        "약품",
        "소모품",
        "수액세트"
      ],
      "urgency": "routine",
      "summary": "약품, 소모품, 개봉 물품의 유효기간 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "약품/수액/소모품 사용 전 유효기간을 확인한다.",
        "개봉 후 사용기한이 있는 물품은 개봉일과 폐기일을 표시한다.",
        "냉장/차광/상온 등 보관조건을 확인한다.",
        "유효기간 경과 또는 오염 의심 물품은 사용하지 않는다.",
        "정기 점검 시 병동 기준표에 따라 폐기/교체한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "고위험 약물과 멸균물품은 유효기간 확인을 특히 우선합니다."
      ],
      "related": [],
      "tags": [
        "안전/유효기간",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS001",
      "category": "DRESSING/일반상처",
      "title": "일반 상처 Dressing",
      "aliases": [
        "dressing",
        "상처",
        "일반상처"
      ],
      "urgency": "routine",
      "summary": "일반 상처 Dressing 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/일반상처",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS002",
      "category": "DRESSING/감염상처",
      "title": "감염된 상처 Dressing",
      "aliases": [
        "감염상처",
        "infected wound",
        "pus",
        "dressing"
      ],
      "urgency": "routine",
      "summary": "감염된 상처 Dressing 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/감염상처",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS003",
      "category": "DRESSING/수술상처",
      "title": "수술 후 상처 Dressing",
      "aliases": [
        "수술상처",
        "op wound",
        "post op dressing"
      ],
      "urgency": "routine",
      "summary": "수술 후 상처 Dressing 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/수술상처",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS004",
      "category": "DRESSING/욕창",
      "title": "욕창 부위 Dressing",
      "aliases": [
        "욕창",
        "pressure injury",
        "sore",
        "dressing"
      ],
      "urgency": "routine",
      "summary": "욕창 부위 Dressing 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/욕창",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS005",
      "category": "DRESSING/PCD",
      "title": "PCD 부위 Dressing",
      "aliases": [
        "PCD",
        "drain",
        "catheter dressing"
      ],
      "urgency": "routine",
      "summary": "PCD 부위 Dressing 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/PCD",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS006",
      "category": "DRESSING/장루",
      "title": "장루 관리·Dressing",
      "aliases": [
        "장루",
        "stoma",
        "ostomy"
      ],
      "urgency": "routine",
      "summary": "장루 관리·Dressing 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/장루",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS007",
      "category": "DRESSING/SDD",
      "title": "SDD 소독",
      "aliases": [
        "SDD",
        "subdural drain",
        "소독"
      ],
      "urgency": "routine",
      "summary": "SDD 소독 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/SDD",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRESS008",
      "category": "DRESSING/EVD",
      "title": "EVD 소독",
      "aliases": [
        "EVD",
        "external ventricular drainage",
        "뇌실외배액",
        "소독"
      ],
      "urgency": "routine",
      "summary": "EVD 소독 체크리스트.",
      "indications": [],
      "preparation": [
        "Dressing set",
        "소독제",
        "멸균 거즈",
        "고정테이프",
        "필요 시 멸균장갑"
      ],
      "steps": [
        "처방과 dressing 주기를 확인한다.",
        "기존 dressing 상태, oozing, 발적, 부종, 통증, 냄새를 확인한다.",
        "무균술을 지켜 소독하고 새 dressing을 적용한다.",
        "배액관/카테터가 있는 경우 고정상태와 배액 양상을 확인한다.",
        "시행 후 날짜, 시간, 시행자, 특이사항을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "감염 의심, 출혈, 배액 급증, 위치 이탈 의심 시 즉시 보고합니다."
      ],
      "related": [],
      "tags": [
        "DRESSING/EVD",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC002",
      "category": "검사·시술/영상",
      "title": "Coronary angio CT 전후 간호",
      "aliases": [
        "coronary angio CT",
        "관상동맥 CT",
        "조영제",
        "CT"
      ],
      "urgency": "routine",
      "summary": "Coronary angio CT 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/영상",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC003",
      "category": "검사·시술/영상",
      "title": "Brain MRI non-enhance 전후 간호",
      "aliases": [
        "Brain MRI",
        "MRI non enhance",
        "brain non enhance"
      ],
      "urgency": "routine",
      "summary": "Brain MRI non-enhance 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/영상",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC004",
      "category": "검사·시술/영상",
      "title": "Brain MRI enhance 전후 간호",
      "aliases": [
        "Brain MRI enhance",
        "조영 MRI",
        "MRI 조영"
      ],
      "urgency": "routine",
      "summary": "Brain MRI enhance 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/영상",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC005",
      "category": "검사·시술/영상",
      "title": "Brain CT 전후 간호",
      "aliases": [
        "Brain CT",
        "뇌 CT",
        "CT"
      ],
      "urgency": "routine",
      "summary": "Brain CT 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/영상",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC006",
      "category": "검사·시술/영상",
      "title": "Head Neck angio CT 전후 간호",
      "aliases": [
        "Head Neck angio CT",
        "HN angio",
        "CTA",
        "조영 CT"
      ],
      "urgency": "routine",
      "summary": "Head Neck angio CT 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/영상",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC007",
      "category": "검사·시술/신경혈관",
      "title": "DSA 전후 간호",
      "aliases": [
        "DSA",
        "혈관조영술"
      ],
      "urgency": "routine",
      "summary": "DSA 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/신경혈관",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC008",
      "category": "검사·시술/혈관",
      "title": "PTA 전후 간호",
      "aliases": [
        "PTA",
        "angioplasty"
      ],
      "urgency": "routine",
      "summary": "PTA 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/혈관",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC009",
      "category": "검사·시술/신경",
      "title": "TCD 검사 전후 간호",
      "aliases": [
        "TCD",
        "transcranial doppler"
      ],
      "urgency": "routine",
      "summary": "TCD 검사 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/신경",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC010",
      "category": "검사·시술/신경혈관",
      "title": "Coil embolization 전후 간호",
      "aliases": [
        "Coil embolization",
        "코일색전술",
        "aneurysm"
      ],
      "urgency": "routine",
      "summary": "Coil embolization 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/신경혈관",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC011",
      "category": "검사·시술/호흡기",
      "title": "Tracheostomy 전후 간호",
      "aliases": [
        "Tracheostomy",
        "기관절개",
        "T-can"
      ],
      "urgency": "routine",
      "summary": "Tracheostomy 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/호흡기",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC012",
      "category": "검사·시술/소화기",
      "title": "EGD 전후 간호",
      "aliases": [
        "EGD",
        "위내시경",
        "내시경"
      ],
      "urgency": "routine",
      "summary": "EGD 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/소화기",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC013",
      "category": "검사·시술/소화기",
      "title": "ERCP 전후 간호",
      "aliases": [
        "ERCP",
        "담췌관",
        "내시경"
      ],
      "urgency": "routine",
      "summary": "ERCP 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/소화기",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROC014",
      "category": "검사·시술/소화기",
      "title": "CFS 전후 간호",
      "aliases": [
        "CFS",
        "대장내시경",
        "colonoscopy"
      ],
      "urgency": "routine",
      "summary": "CFS 전후 간호 기본 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "검사/시술 처방과 예약 시간을 확인한다.",
        "금식, 동의서, 조영제/알레르기, 신장기능, 항응고제 여부를 확인한다.",
        "필요한 IV line, 검사 전 처치, 이송 준비를 확인한다.",
        "검사/시술 후 V/S, 통증, 출혈, 신경학적 변화, 시술부위 이상을 확인한다.",
        "검사 후 처방, 식이 재개, 약물 재개 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검사별 세부 준비는 해당 부서 지침과 주치의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·시술/소화기",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SPEC001",
      "category": "검체/Blood culture",
      "title": "Blood culture 채취",
      "aliases": [
        "Blood culture",
        "blood cx",
        "혈액배양",
        "aerobic",
        "anaerobic"
      ],
      "urgency": "routine",
      "summary": "Blood culture 채취 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방과 검체 종류를 확인한다.",
        "환자 확인 후 라벨과 검체 용기를 대조한다.",
        "무균 또는 청결 원칙에 맞게 검체를 채취한다.",
        "채취 시간과 부위를 확인하여 접수한다.",
        "검체 지연/오염 가능성이 있으면 재채취 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체별 용기와 채취법은 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검체/Blood culture",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SPEC002",
      "category": "검체/Sputum culture",
      "title": "Sputum culture 채취",
      "aliases": [
        "sputum cx",
        "sputum culture",
        "객담배양"
      ],
      "urgency": "routine",
      "summary": "Sputum culture 채취 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방과 검체 종류를 확인한다.",
        "환자 확인 후 라벨과 검체 용기를 대조한다.",
        "무균 또는 청결 원칙에 맞게 검체를 채취한다.",
        "채취 시간과 부위를 확인하여 접수한다.",
        "검체 지연/오염 가능성이 있으면 재채취 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체별 용기와 채취법은 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검체/Sputum culture",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SPEC003",
      "category": "검체/Urine culture",
      "title": "Urine culture 채취",
      "aliases": [
        "urine cx",
        "urine culture",
        "소변배양"
      ],
      "urgency": "routine",
      "summary": "Urine culture 채취 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방과 검체 종류를 확인한다.",
        "환자 확인 후 라벨과 검체 용기를 대조한다.",
        "무균 또는 청결 원칙에 맞게 검체를 채취한다.",
        "채취 시간과 부위를 확인하여 접수한다.",
        "검체 지연/오염 가능성이 있으면 재채취 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체별 용기와 채취법은 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검체/Urine culture",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SPEC004",
      "category": "검체/RAT",
      "title": "RAT 검사",
      "aliases": [
        "RAT",
        "rapid antigen test",
        "신속항원"
      ],
      "urgency": "routine",
      "summary": "RAT 검사 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방과 검체 종류를 확인한다.",
        "환자 확인 후 라벨과 검체 용기를 대조한다.",
        "무균 또는 청결 원칙에 맞게 검체를 채취한다.",
        "채취 시간과 부위를 확인하여 접수한다.",
        "검체 지연/오염 가능성이 있으면 재채취 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체별 용기와 채취법은 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검체/RAT",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "SPEC005",
      "category": "검체/CRE·CPO",
      "title": "CRE/CPO 검체",
      "aliases": [
        "CRE",
        "CPO",
        "격리검사",
        "직장도말"
      ],
      "urgency": "routine",
      "summary": "CRE/CPO 검체 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방과 검체 종류를 확인한다.",
        "환자 확인 후 라벨과 검체 용기를 대조한다.",
        "무균 또는 청결 원칙에 맞게 검체를 채취한다.",
        "채취 시간과 부위를 확인하여 접수한다.",
        "검체 지연/오염 가능성이 있으면 재채취 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체별 용기와 채취법은 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검체/CRE·CPO",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0010.png",
          "alt": "격리실 간호 참고 자료",
          "caption": "격리실 간호 참고 자료"
        }
      ]
    },
    {
      "id": "SPEC006",
      "category": "검체/Tip culture",
      "title": "Tip culture 채취",
      "aliases": [
        "Tip cx",
        "tip culture",
        "카테터 tip"
      ],
      "urgency": "routine",
      "summary": "Tip culture 채취 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방과 검체 종류를 확인한다.",
        "환자 확인 후 라벨과 검체 용기를 대조한다.",
        "무균 또는 청결 원칙에 맞게 검체를 채취한다.",
        "채취 시간과 부위를 확인하여 접수한다.",
        "검체 지연/오염 가능성이 있으면 재채취 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "검체별 용기와 채취법은 진단검사의학과 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검체/Tip culture",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG023",
      "category": "약물/Mix/Continuous infusion",
      "title": "주요 약물 약속처방 Mix 확인 원칙",
      "aliases": [
        "continuous infusion",
        "약속처방",
        "mix",
        "희석",
        "infusion",
        "syringe pump"
      ],
      "urgency": "urgent",
      "summary": "Continuous infusion 약물 mix 확인 공통 원칙.",
      "indications": [],
      "preparation": [],
      "steps": [
        "약물명, 총량, 희석액, 최종용량, 농도, 속도를 확인한다.",
        "처방과 병동 약속처방 mix법이 일치하는지 확인한다.",
        "고위험 약물은 가능하면 2인 확인한다.",
        "Pump setting 후 line 연결, start 여부, 잔량을 확인한다.",
        "용량 변경 시 변경 시간과 반응을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "정확한 mix 용량은 병원 약속처방과 최신 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "약물/Mix/Continuous infusion",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "INFO001",
      "category": "원내정보/전화번호",
      "title": "원내 내선번호 관리",
      "aliases": [
        "내선번호",
        "원내전화",
        "전화번호",
        "6211",
        "6212",
        "마약장 6029",
        "사회복지사 139방",
        "전화",
        "원내 연락",
        "부서 번호",
        "6029",
        "139"
      ],
      "urgency": "routine",
      "summary": "문서에 확인되는 내선번호와 원내 연락처 관리 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "지참약 식별의뢰서 관련 번호: 6211, 6212",
        "마약장 번호: 6029",
        "DNR 서류 관련 사회복지사: 139방",
        "그 외 ICU, ER, 진검실, 약국, 영상의학과, 원무, 영안실 번호는 병원 최신 연락망으로 보완"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "원내 내선번호는 변경 가능하므로 병원 최신 연락망 확인이 필요합니다."
      ],
      "related": [],
      "tags": [
        "원내정보/전화번호",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 지참약/마약/DNR"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "EQUIP001",
      "category": "장비/Infusion pump",
      "title": "Infusion pump 사용법",
      "aliases": [
        "Infusion pump",
        "인퓨전펌프",
        "pump",
        "수액펌프"
      ],
      "urgency": "routine",
      "summary": "Infusion pump 기본 사용 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방된 약물/수액, 총량, 속도, 주입경로를 확인한다.",
        "수액세트를 pump에 맞게 장착한다.",
        "공기 제거 후 line을 연결한다.",
        "Rate, VTBI 또는 volume 값을 확인하고 start한다.",
        "알람 발생 시 occlusion, air, door, battery, end 등을 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "고위험 약물은 pump setting 후 2인 확인을 권장합니다."
      ],
      "related": [],
      "tags": [
        "장비/Infusion pump",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "EQUIP002",
      "category": "장비/Syringe pump",
      "title": "Syringe pump 사용법",
      "aliases": [
        "Syringe pump",
        "시린지펌프",
        "syringe",
        "pump"
      ],
      "urgency": "routine",
      "summary": "Syringe pump 기본 사용 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "주사기 용량과 약물 농도를 확인한다.",
        "주사기를 정확히 장착하고 clamp/line air를 확인한다.",
        "Rate 또는 dose setting을 처방과 대조한다.",
        "Start 후 실제 주입 여부와 잔량을 확인한다.",
        "용량 변경 시 변경 시간과 사유를 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "승압제/진정제 등은 line 단절과 bolus 위험에 주의합니다."
      ],
      "related": [],
      "tags": [
        "장비/Syringe pump",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DRUG024",
      "category": "약물/경구혈당강하제",
      "title": "경구 혈당 강하제 확인",
      "aliases": [
        "경구혈당강하제",
        "OHA",
        "당뇨약",
        "BST",
        "메트포르민",
        "sulfonylurea"
      ],
      "urgency": "routine",
      "summary": "입원 환자의 경구혈당강하제 복용 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "지참약 또는 처방에서 경구혈당강하제 종류를 확인한다.",
        "금식, 검사/조영제, 신장기능, 저혈당 위험을 확인한다.",
        "수술/시술 전후 복용 지속 여부는 담당의 처방을 확인한다.",
        "BST와 저혈당 증상을 관찰한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "조영제 검사 전후 metformin 중지 여부 등은 병원 지침과 처방을 우선합니다."
      ],
      "related": [],
      "tags": [
        "약물/경구혈당강하제",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin000b.png",
          "alt": "인슐린 제품/용법 참고 표",
          "caption": "인슐린 제품/용법 참고 표"
        },
        {
          "src": "bin000c.png",
          "alt": "경구 혈당강하제 참고 표",
          "caption": "경구 혈당강하제 참고 표"
        }
      ]
    },
    {
      "id": "ECART001",
      "category": "E-cart/응급약물",
      "title": "E-cart 응급약물 목록",
      "aliases": [
        "E-cart",
        "응급약물",
        "에피네프린",
        "노르에피네프린",
        "아트로핀",
        "코다론",
        "아데노신",
        "비본",
        "에토미데이트",
        "마그네슘",
        "칼슘",
        "베카론",
        "응급카트",
        "emergency cart",
        "code cart",
        "E-cart 약물",
        "ACLS 약물",
        "응급약"
      ],
      "urgency": "emergency",
      "summary": "E-cart에서 자주 확인하는 응급약물 목록.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Epinephrine, Norepinephrine, Atropine, Cordarone, Adenosine, Bivon을 확인한다.",
        "Etomidate, Magnesium sulfate, Calcium gluconate, Vecaron 등을 확인한다.",
        "Dopamine premix, Dobutamine premix 등 주입약물을 확인한다.",
        "사용 후 즉시 보충/기록/봉인 상태를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "응급약물 용량과 사용법은 CPR/ACLS 및 병원 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "E-cart/응급약물",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ECART002",
      "category": "약물/고주의약물",
      "title": "고주의 약물 관리",
      "aliases": [
        "고주의약물",
        "high alert",
        "승압제",
        "인슐린",
        "항응고제",
        "KCL",
        "진정제"
      ],
      "urgency": "urgent",
      "summary": "ICU에서 주의가 필요한 고위험 약물 관리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "고주의 약물 여부를 확인하고 병동 표시/라벨 기준을 따른다.",
        "용량, 농도, 주입속도, route를 2인 확인한다.",
        "Pump 사용과 line 라벨링을 확인한다.",
        "부작용과 모니터링 항목을 인계한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "병원 고주의 약물 목록과 안전관리 지침을 우선합니다."
      ],
      "related": [],
      "tags": [
        "약물/고주의약물",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "ECART003",
      "category": "약물/항부정맥제",
      "title": "항부정맥제 사용 전 확인",
      "aliases": [
        "항부정맥제",
        "Cordarone",
        "Adenosine",
        "Amiodarone",
        "arrhythmia",
        "VT",
        "SVT"
      ],
      "urgency": "urgent",
      "summary": "항부정맥제 투여 전후 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Rhythm strip 또는 EKG를 확인한다.",
        "처방 약물, 용량, 투여경로, 투여속도를 확인한다.",
        "투여 중 BP/HR/rhythm 변화를 관찰한다.",
        "투여 후 rhythm 변화와 환자 반응을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "응급상황에서는 병원 CPR/ACLS 프로토콜과 담당의 지시를 우선합니다."
      ],
      "related": [],
      "tags": [
        "약물/항부정맥제",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "CONSENT001",
      "category": "동의서",
      "title": "동의서 종류와 확인 상세",
      "aliases": [
        "동의서",
        "수술동의서",
        "PCA 동의서",
        "수혈동의서",
        "신체보호대 동의서",
        "DNR",
        "Mahurkar",
        "Perm cath"
      ],
      "urgency": "routine",
      "summary": "ICU에서 자주 확인하는 동의서 종류와 확인 포인트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "입원 시: 신체보호대 동의서, ICU 입원생활 안내문 확인",
        "수술 전: 수술동의서, 수술표식/표식지, PCA 동의서 확인",
        "수혈 전: 수혈동의서 및 혈액요청서 확인",
        "DNR/연명의료: 별도서식 9, 10, 11, 13호 중 해당 서식 확인",
        "투석용 catheter: Mahurkar와 Perm cath 동의서가 다름을 확인",
        "검사/시술 전: 검사·시술 동의서, 조영제 관련 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "서명, 날짜, 설명의, 보호자 관계 누락 여부를 시행 전 확인합니다."
      ],
      "related": [],
      "tags": [
        "동의서",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 Orientation/DNR/부착기구"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DEPT001",
      "category": "각과 Routine/소화기내과",
      "title": "소화기내과 Routine",
      "aliases": [
        "소화기내과",
        "GI",
        "EGD",
        "ERCP",
        "CFS"
      ],
      "urgency": "routine",
      "summary": "소화기내과 Routine 기본 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "해당 과 주치의/원장님별 선호 routine을 확인한다.",
        "검사, lab, 영상, 식이, 항생제, 항응고제, 수액 처방 패턴을 확인한다.",
        "특이 지시사항은 인계장 또는 병동 매뉴얼에 업데이트한다.",
        "Routine과 다른 처방은 담당의 지시를 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "각과 원장님별 세부 routine은 병원 내부 최신 매뉴얼로 계속 보완해야 합니다."
      ],
      "related": [],
      "tags": [
        "각과 Routine/소화기내과",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DEPT002",
      "category": "각과 Routine/심장내과",
      "title": "심장내과 Routine",
      "aliases": [
        "심장내과",
        "CV",
        "angio CT",
        "EKG",
        "echo"
      ],
      "urgency": "routine",
      "summary": "심장내과 Routine 기본 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "해당 과 주치의/원장님별 선호 routine을 확인한다.",
        "검사, lab, 영상, 식이, 항생제, 항응고제, 수액 처방 패턴을 확인한다.",
        "특이 지시사항은 인계장 또는 병동 매뉴얼에 업데이트한다.",
        "Routine과 다른 처방은 담당의 지시를 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "각과 원장님별 세부 routine은 병원 내부 최신 매뉴얼로 계속 보완해야 합니다."
      ],
      "related": [],
      "tags": [
        "각과 Routine/심장내과",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0012.png",
          "alt": "Bedside monitor 예시 사진",
          "caption": "Bedside monitor 예시 사진"
        }
      ]
    },
    {
      "id": "DEPT003",
      "category": "각과 Routine/신장내과",
      "title": "신장내과 Routine",
      "aliases": [
        "신장내과",
        "NEPH",
        "CRRT",
        "HD",
        "BST sling"
      ],
      "urgency": "routine",
      "summary": "신장내과 Routine 기본 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "해당 과 주치의/원장님별 선호 routine을 확인한다.",
        "검사, lab, 영상, 식이, 항생제, 항응고제, 수액 처방 패턴을 확인한다.",
        "특이 지시사항은 인계장 또는 병동 매뉴얼에 업데이트한다.",
        "Routine과 다른 처방은 담당의 지시를 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "각과 원장님별 세부 routine은 병원 내부 최신 매뉴얼로 계속 보완해야 합니다."
      ],
      "related": [],
      "tags": [
        "각과 Routine/신장내과",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DEPT004",
      "category": "각과 Routine/신경외과",
      "title": "신경외과 Routine",
      "aliases": [
        "신경외과",
        "NS",
        "Brain",
        "GCS",
        "TFCA"
      ],
      "urgency": "routine",
      "summary": "신경외과 Routine 기본 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "해당 과 주치의/원장님별 선호 routine을 확인한다.",
        "검사, lab, 영상, 식이, 항생제, 항응고제, 수액 처방 패턴을 확인한다.",
        "특이 지시사항은 인계장 또는 병동 매뉴얼에 업데이트한다.",
        "Routine과 다른 처방은 담당의 지시를 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "각과 원장님별 세부 routine은 병원 내부 최신 매뉴얼로 계속 보완해야 합니다."
      ],
      "related": [],
      "tags": [
        "각과 Routine/신경외과",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "DEPT005",
      "category": "각과 Routine/정형외과",
      "title": "정형외과 Routine",
      "aliases": [
        "정형외과",
        "OS",
        "TKRA",
        "THRA",
        "post op"
      ],
      "urgency": "routine",
      "summary": "정형외과 Routine 기본 확인 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "해당 과 주치의/원장님별 선호 routine을 확인한다.",
        "검사, lab, 영상, 식이, 항생제, 항응고제, 수액 처방 패턴을 확인한다.",
        "특이 지시사항은 인계장 또는 병동 매뉴얼에 업데이트한다.",
        "Routine과 다른 처방은 담당의 지시를 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "각과 원장님별 세부 routine은 병원 내부 최신 매뉴얼로 계속 보완해야 합니다."
      ],
      "related": [],
      "tags": [
        "각과 Routine/정형외과",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "PROTO001",
      "category": "프로토콜/DKA",
      "title": "DKA protocol 상세",
      "aliases": [
        "DKA",
        "diabetic ketoacidosis",
        "RI continuous",
        "BST",
        "케톤산증"
      ],
      "urgency": "urgent",
      "summary": "내과 DKA protocol 및 RI continuous 기준.",
      "indications": [],
      "preparation": [],
      "steps": [
        "BST 200 이하로 감소할 때까지 BST q1h 확인, 이후 q2h 확인",
        "BST >250: RI +1cc/hr",
        "BST 150-250: 마지막 속도 그대로 유지하고 1시간 후 BST check",
        "BST <150: 1시간 stop 후 다시 시작, 재시작 시 2cc/hr",
        "BST <100: stop 유지",
        "전해질과 수액 처방을 함께 확인한다."
      ],
      "dosage_or_mix": [
        "RI continuous: N/S 100cc + RI 100IU mix",
        "2cc/hr로 시작"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "DKA 적용은 담당의 처방과 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "프로토콜/DKA",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "업무 지침 매뉴얼 내과 DKA protocol"
      ],
      "tables": [
        {
          "title": "DKA RI continuous 조절 기준",
          "headers": [
            "BST",
            "조절"
          ],
          "rows": [
            [
              "> 250",
              "RI +1cc/hr"
            ],
            [
              "150-250",
              "마지막 속도 유지, 1시간 후 BST check"
            ],
            [
              "< 150",
              "1시간 stop 후 2cc/hr로 재시작"
            ],
            [
              "< 100",
              "stop 유지"
            ]
          ]
        }
      ],
      "images": []
    },
    {
      "id": "BST001",
      "category": "BST Sliding",
      "title": "내과·심장내과 RI sliding 상세",
      "aliases": [
        "BST sliding",
        "RI sliding",
        "내과",
        "심장내과",
        "저혈당",
        "50DW"
      ],
      "urgency": "urgent",
      "summary": "내과/심장내과 BST sliding과 저혈당 처치 기준.",
      "indications": [],
      "preparation": [],
      "steps": [
        "내과: 250<BST<299 RI 4unit",
        "내과: 300<BST<349 RI 6unit",
        "내과: 350<BST<399 RI 8unit",
        "내과: BST 400 이상 RI 10unit",
        "심장내과: BST 140-179 RI 2unit",
        "심장내과: BST 180-220 RI 4unit",
        "심장내과: BST 221-260 RI 6unit",
        "심장내과: BST 261-300 RI 8unit",
        "심장내과: BST 301-350 RI 10unit",
        "심장내과: BST 351-400 RI 12unit",
        "심장내과: BST >400 RI 14unit"
      ],
      "dosage_or_mix": [
        "BST<70: 50% DW 100 중 30ml IV 후 30분 뒤 BST f/u",
        "BST<50: 50% DW 100 중 60ml IV 후 30분 뒤 BST f/u"
      ],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "과별 sliding scale은 처방과 최신 병원 기준을 우선합니다."
      ],
      "related": [],
      "tags": [
        "BST Sliding",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "업무 지침 매뉴얼 RI sliding"
      ],
      "tables": [
        {
          "title": "내과 RI Sliding",
          "headers": [
            "BST",
            "RI"
          ],
          "rows": [
            [
              "250 < BST < 299",
              "4 unit"
            ],
            [
              "300 < BST < 349",
              "6 unit"
            ],
            [
              "350 < BST < 399",
              "8 unit"
            ],
            [
              "BST ≥ 400",
              "10 unit"
            ]
          ]
        },
        {
          "title": "심장내과 RI Sliding",
          "headers": [
            "BST",
            "RI"
          ],
          "rows": [
            [
              "140-179",
              "2 unit"
            ],
            [
              "180-220",
              "4 unit"
            ],
            [
              "221-260",
              "6 unit"
            ],
            [
              "261-300",
              "8 unit"
            ],
            [
              "301-350",
              "10 unit"
            ],
            [
              "351-400",
              "12 unit"
            ],
            [
              "> 400",
              "14 unit"
            ]
          ]
        },
        {
          "title": "저혈당 처치",
          "headers": [
            "BST",
            "처치"
          ],
          "rows": [
            [
              "< 70",
              "50% DW 100 중 30ml IV 후 30분 뒤 BST f/u"
            ],
            [
              "< 50",
              "50% DW 100 중 60ml IV 후 30분 뒤 BST f/u"
            ]
          ]
        }
      ],
      "images": [
        {
          "src": "bin000a.png",
          "alt": "인슐린 종류와 작용시간 그래프",
          "caption": "인슐린 종류와 작용시간 그래프"
        }
      ]
    },
    {
      "id": "PROTO002",
      "category": "프로토콜/DIC",
      "title": "DIC 검사·바코드·관리 상세",
      "aliases": [
        "DIC",
        "D-dimer",
        "PT",
        "aPTT",
        "INR",
        "fibrinogen",
        "DIC 바코드"
      ],
      "urgency": "urgent",
      "summary": "DIC 관련 lab 접수와 출혈 관찰.",
      "indications": [],
      "preparation": [],
      "steps": [
        "채혈접수업무에서 처방 목록 확인 후 채혈접수/바코드 발행",
        "DIC는 바코드 재발행이 필요할 수 있으며 2개 출력 기준을 확인",
        "PT/aPTT/INR, D-dimer 등 coagulation 검사를 확인",
        "출혈, oozing, drain 양상, 멍, V/S 변화 확인",
        "검사결과 이상 또는 출혈 시 담당의 Noti"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "DIC 치료와 수혈 기준은 담당의 처방과 병원 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "프로토콜/DIC",
        "v11_source_enhanced"
      ],
      "review": {
        "status": "v11_source_enhanced",
        "rule": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기준으로 보강"
      },
      "source_refs": [
        "윌스 ICU AI 업무 매뉴얼 Lab / DIC 바코드"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "EMR001",
      "category": "EMR/카멜레온",
      "title": "카멜레온 EMR 기본 사용",
      "aliases": [
        "카멜레온",
        "EMR",
        "전산",
        "간호기록",
        "처방",
        "액팅"
      ],
      "urgency": "routine",
      "summary": "카멜레온 전산 사용 시 자주 확인하는 항목.",
      "indications": [],
      "preparation": [],
      "steps": [
        "환자 선택과 병실/등록번호를 확인한다.",
        "처방, 간호액팅, V/S, I/O, flow sheet, 간호기록을 확인한다.",
        "검사 처방은 채혈접수/바코드 발행 여부를 확인한다.",
        "기구 삽입/제거, 산소 변경, 약물 변경은 관련 전산 항목을 함께 수정한다.",
        "기록 완료 후 저장 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "전산 메뉴명은 병원 EMR 버전 변경에 따라 달라질 수 있습니다."
      ],
      "related": [],
      "tags": [
        "EMR/카멜레온",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "EQUIP003",
      "category": "장비/사용법",
      "title": "장비 사용 방법 공통",
      "aliases": [
        "장비",
        "사용법",
        "monitor",
        "pump",
        "vent",
        "CRRT",
        "제세동기"
      ],
      "urgency": "routine",
      "summary": "ICU 장비 사용 전후 공통 체크리스트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "장비명, 환자 적용 목적, 처방 여부를 확인한다.",
        "전원, 배터리, 소모품, 알람 설정을 확인한다.",
        "환자 연결 후 실제 작동 여부를 확인한다.",
        "알람 발생 시 원인을 확인하고 해결되지 않으면 담당자에게 보고한다.",
        "사용 후 세척/반납/충전/소모품 보충 기준을 따른다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "세부 조작법은 장비별 제조사 매뉴얼과 병원 교육자료를 우선합니다."
      ],
      "related": [],
      "tags": [
        "장비/사용법",
        "v10_master_30_categories"
      ],
      "review": {
        "status": "v10_user_requested_master_category",
        "rule": "사용자 제시 30개 카테고리 기반 추가 카드. 세부 수치/프로토콜은 병원 최신 지침 확인 필요."
      },
      "source_refs": [
        "사용자 제시 30개 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU001",
      "category": "응급상황",
      "title": "응급상황: E-CART 응급약물·응급기구·응급간호·CPR",
      "aliases": [
        "검색",
        "응급",
        "응급상황",
        "E-CART",
        "E cart",
        "이카트",
        "응급카트",
        "응급약물",
        "응급기구",
        "응급간호",
        "CPR",
        "CPR 순서",
        "CPR 방법",
        "CPR 기록",
        "code blue",
        "코드블루",
        "심정지",
        "ROSC",
        "에피",
        "에피네프린",
        "아트로핀",
        "코다론",
        "아데노신",
        "비본",
        "제세동",
        "defib",
        "ambu",
        "I-gel",
        "Lucas",
        "기관삽관",
        "intubation",
        "airway",
        "crash cart",
        "Ambu",
        "CPR 모니터링 기록지"
      ],
      "urgency": "routine",
      "summary": "응급상황에서 빠르게 보는 E-CART 약물, 응급기구, 응급간호, CPR 순서/방법/기록.",
      "indications": [],
      "preparation": "emergency",
      "steps": [
        "E-CART 응급약물과 응급기구 위치를 확인한다.",
        "CPR 발생 시 compression, airway, rhythm check, drug, record 역할을 나눈다.",
        "Epinephrine, defib, airway, ROSC 시간을 기록한다.",
        "응급상황 종료 후 사용 약품과 물품을 즉시 보충한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "응급상황",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU002",
      "category": "임상 약물",
      "title": "임상 약물: 항생제·수액·자주 사용하는 약물",
      "aliases": [
        "임상약물",
        "약물",
        "항생제",
        "항생제 계열",
        "antibiotics",
        "AST",
        "세파",
        "타박탐",
        "유박탐",
        "맥스핌",
        "반코",
        "반코마이신",
        "카바페넴",
        "퀴놀론",
        "수액",
        "수액 종류",
        "수액 적응증",
        "fluid",
        "N/S",
        "NS",
        "D/W",
        "DW",
        "5DW",
        "5DS",
        "Hartmann",
        "하트만",
        "알부민",
        "라식스",
        "만니톨",
        "해열제",
        "진통제",
        "기관지확장제",
        "네뷸약",
        "PPI",
        "위장약",
        "기타 약물",
        "AST 유무",
        "항생제 AST",
        "투약시간",
        "QD BID TID QID"
      ],
      "urgency": "routine",
      "summary": "항생제 계열, AST 여부, 수액 종류와 적응증, ICU에서 자주 쓰는 약물 검색용 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "항생제는 계열, AST 시행 여부, 신장기능, 배양검사 결과를 함께 확인한다.",
        "수액은 N/S, D/W, 5DS 등 처방 목적과 적응증을 확인한다.",
        "자주 쓰는 약물은 적응증, 금기, 부작용, 모니터링 항목을 함께 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "임상 약물",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU003",
      "category": "마약·향정",
      "title": "마약 & 향정: 반환·잔량보관·마약성 진통제",
      "aliases": [
        "마약",
        "향정",
        "마약장",
        "마약 반환",
        "마약 반납",
        "잔량",
        "잔량 보관",
        "잔량반납",
        "마약성 진통제",
        "마약처방전",
        "반납처방전",
        "pink",
        "white",
        "몰핀",
        "morphine",
        "페치딘",
        "pethidine",
        "fentanyl",
        "remifentanil",
        "울티안",
        "midazolam",
        "미다컴",
        "propofol",
        "프레조폴",
        "dexmedetomidine",
        "덱스메딘",
        "향정신성"
      ],
      "urgency": "routine",
      "summary": "마약/향정의 수령, 보관, 잔량, 반환/반납, 마약성 진통제 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "수령 즉시 환자명, 약명, 용량, 파손 여부를 확인한다.",
        "마약은 이중잠금 마약장에 보관하고 인계 시 함께 확인한다.",
        "잔량은 주사기로 재고 빈 앰플과 함께 봉투에 보관/반납한다.",
        "사용하지 않은 마약은 반납신청 후 약국에 직접 인계한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "마약·향정",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU004",
      "category": "의료장비",
      "title": "의료장비: Ventilator·High Flow·CRRT·Pump·제세동기·EKG",
      "aliases": [
        "의료장비",
        "장비",
        "ventilator",
        "vent",
        "벤트",
        "인공호흡기",
        "high flow",
        "HFNC",
        "Airvo",
        "하이플로우",
        "CRRT",
        "씨알알티",
        "infusion pump",
        "인퓨전펌프",
        "syringe pump",
        "시린지펌프",
        "syriange pump",
        "제세동기",
        "defibrillator",
        "EKG",
        "ECG",
        "monitor",
        "모니터",
        "alarm",
        "알람",
        "pump 사용법",
        "Infusion pump B.Braun",
        "pump alarm",
        "Low battery",
        "Occlusion",
        "Air alarm"
      ],
      "urgency": "routine",
      "summary": "Ventilator, high flow, CRRT, infusion/syringe pump, 제세동기, EKG 장비 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "장비 적용 전 처방, 목적, setting을 확인한다.",
        "전원, 배터리, 소모품, line 연결과 alarm을 확인한다.",
        "장비 변경 시 간호기록, flow sheet, V/S 메모를 함께 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "의료장비",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin000d.png",
          "alt": "Nebulizer 사용 참고 자료",
          "caption": "Nebulizer 사용 참고 자료"
        },
        {
          "src": "bin000e.png",
          "alt": "산소요법(O2) 참고 표",
          "caption": "산소요법(O2) 참고 표"
        },
        {
          "src": "bin0012.png",
          "alt": "Bedside monitor 예시 사진",
          "caption": "Bedside monitor 예시 사진"
        }
      ]
    },
    {
      "id": "MENU005",
      "category": "수혈",
      "title": "수혈: Lab·동의서·전처치·TIP·기록",
      "aliases": [
        "수혈",
        "transfusion",
        "수혈 LAB",
        "수혈 lab",
        "수혈 동의서",
        "수혈 전처치",
        "전처치 약물",
        "수혈 TIP",
        "수혈 팁",
        "기록",
        "확인사항",
        "P-RBC",
        "PRBC",
        "FFP",
        "PC",
        "A-PLT",
        "Cryo",
        "혈액요청서",
        "교차시험",
        "cross matching",
        "ABO",
        "Rh",
        "irregular",
        "페니라민",
        "해열제",
        "수혈기록지",
        "수혈부작용",
        "수혈 V/S",
        "혈액 불출",
        "수혈 filter",
        "혈액제제",
        "RBC PC APLT FFP Cryo"
      ],
      "urgency": "routine",
      "summary": "수혈 준비, Lab, 동의서, 전처치 약물, 수혈 TIP, 기록과 확인사항 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "수혈 처방, 동의서, 혈액요청서, 검체 라벨을 확인한다.",
        "수혈 전/15분 후/종료 시 V/S와 부작용을 확인한다.",
        "수혈기록지 번호와 일자를 확인하고 스캔한다.",
        "I/O에 혈액제제 종류와 용량을 입력한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "수혈",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin000f.png",
          "alt": "수혈 관련 참고 표",
          "caption": "수혈 관련 참고 표"
        }
      ]
    },
    {
      "id": "MENU006",
      "category": "검사·검체",
      "title": "검사/검체: 혈액검사 참고치·의심질환·영상검사",
      "aliases": [
        "검사",
        "검체",
        "혈액검사",
        "혈액 검사 참고치",
        "참고치",
        "정상범위",
        "의심질환",
        "영상검사",
        "자주 시행하는 영상검사",
        "CT",
        "MRI",
        "angio CT",
        "Brain CT",
        "Brain MRI",
        "CAG",
        "TFCA",
        "DSA",
        "PTA",
        "TCD",
        "EGD",
        "ERCP",
        "CFS",
        "culture",
        "blood culture",
        "sputum",
        "urine",
        "RAT",
        "CRE",
        "CPO",
        "Tip culture",
        "검체통",
        "채혈병",
        "ABGA",
        "CT 조영제",
        "MRI 조영제",
        "영상검사 준비"
      ],
      "urgency": "routine",
      "summary": "검체 채취, 혈액검사 참고치, 의심질환, 자주 시행하는 영상검사 검색 카드.",
      "indications": [],
      "preparation": "routine",
      "steps": [
        "검사 처방과 검체 용기, 채혈 순서를 확인한다.",
        "검체는 환자 라벨과 용기를 대조하고 오염되지 않게 채취한다.",
        "영상검사는 금식, 조영제, 신장기능, 동의서, IV line을 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "검사·검체",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU007",
      "category": "Dressing·Line",
      "title": "Dressing / 각종 LINE / Drainage 정리",
      "aliases": [
        "dressing",
        "드레싱",
        "상처",
        "일반상처",
        "감염상처",
        "수술상처",
        "욕창",
        "PCD",
        "EVD",
        "SDD",
        "장루",
        "line",
        "라인",
        "각종 LINE",
        "C-line",
        "A-line",
        "PICC",
        "HD cath",
        "Mahurkar",
        "Perm cath",
        "drain",
        "drainage",
        "drainage 종류",
        "drainage 특징",
        "JP",
        "Hemovac",
        "L-tube",
        "Foley",
        "T-tube",
        "tracheostomy",
        "소독제",
        "상처 소독",
        "장루 dressing",
        "EVD bag 소독",
        "PCD dressing"
      ],
      "urgency": "routine",
      "summary": "Dressing, 각종 line, drain/drainage 종류와 특징을 정리하는 카드.",
      "indications": [],
      "preparation": "routine",
      "steps": [
        "Dressing 전 처방과 주기를 확인한다.",
        "Line은 삽입부위, lumen 수, 목적, dressing 날짜, 감염징후를 확인한다.",
        "Drain은 위치, 양상, 양, 압력/자연배액 여부를 확인하고 I/O에 반영한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "Dressing·Line",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU008",
      "category": "근무업무",
      "title": "DAY / EVENING / NIGHT 세부 업무",
      "aliases": [
        "DAY",
        "day",
        "데이",
        "EVENING",
        "evening",
        "이브닝",
        "NIGHT",
        "night",
        "나이트",
        "근무",
        "routine job",
        "실무 업무",
        "인계",
        "라운딩",
        "initial",
        "final",
        "식이",
        "액팅",
        "처방정리",
        "Cadex",
        "flow sheet",
        "I/O",
        "BST",
        "제세동기 점검",
        "채혈접수",
        "환자분류",
        "화재분류",
        "약싸기",
        "입원 시 절차",
        "initial 후 전산",
        "투약시간",
        "교체주기"
      ],
      "urgency": "routine",
      "summary": "Day/Evening/Night를 포괄적 설명이 아니라 실제 순서별 세부 업무로 찾는 카드.",
      "indications": [],
      "preparation": "routine",
      "steps": [
        "Day: 물품카운트, E-cart, 인계, 라운딩, 8-9시 라벨/액팅, 회진, 익일 처방 확인",
        "Evening: 익일 처방 확인, 당일/익일 처방 비교, Lab/Chest/검사 Cadex 정리",
        "Night: initial 후 전산, 환자분류/화재분류, 식이, 액팅 스케줄링, 약 정리, dressing/kit, lab, 제세동기/BST QC"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "근무업무",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU009",
      "category": "CSR 물품",
      "title": "CSR 물품 카운트: 이름과 생김새",
      "aliases": [
        "CSR",
        "CSR 물품",
        "물품카운트",
        "물품 카운트",
        "물품",
        "카운트",
        "멸균물품",
        "forcep",
        "dressing set",
        "foley set",
        "suture set",
        "소독물품",
        "이름",
        "생김새",
        "모양",
        "사진",
        "물품 이름"
      ],
      "urgency": "routine",
      "summary": "CSR 물품 이름과 생김새를 찾기 위한 시작 카드.",
      "indications": [],
      "preparation": "routine",
      "steps": [
        "근무 시작 시 CSR 물품 카운트를 확인한다.",
        "물품 이름, 용도, 위치, 유효기간을 함께 확인한다.",
        "사진 자료가 있으면 카드별 이미지로 계속 보완한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "CSR 물품",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0001.png",
          "alt": "Kelly / Long kelly 기구 사진",
          "caption": "Kelly / Long kelly 기구 사진"
        },
        {
          "src": "bin0002.png",
          "alt": "Forcep / Dressing set 구성 사진",
          "caption": "Forcep / Dressing set 구성 사진"
        },
        {
          "src": "bin0003.png",
          "alt": "Scissors / Mosquito / Magill forcep 사진",
          "caption": "Scissors / Mosquito / Magill forcep 사진"
        },
        {
          "src": "bin0004.png",
          "alt": "Knife handle / Needle holder / Metzenbaum / Personal scissor 사진",
          "caption": "Knife handle / Needle holder / Metzenbaum / Personal scissor 사진"
        }
      ]
    },
    {
      "id": "MENU010",
      "category": "감염관리",
      "title": "다제내성 감염균: VRE·CRE·CPO·MRSA·MSSA·MRPA",
      "aliases": [
        "다제내성",
        "감염균",
        "다제내성감염균",
        "VRE",
        "CRE",
        "CPO",
        "MRSA",
        "MSSA",
        "MRPA",
        "MDRO",
        "격리",
        "접촉주의",
        "보호구",
        "항생제",
        "적응 별 항생제",
        "균별 항생제",
        "감염관리",
        "배양검사",
        "contact precaution"
      ],
      "urgency": "routine",
      "summary": "VRE/CRE/CPO/MRSA/MSSA/MRPA와 격리, 항생제 관련 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "균명과 격리주의 종류를 확인한다.",
        "보호구, 손위생, 환경소독, 전용물품 사용 여부를 확인한다.",
        "배양검사와 항생제 처방을 함께 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "감염관리",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0010.png",
          "alt": "격리실 간호 참고 자료",
          "caption": "격리실 간호 참고 자료"
        },
        {
          "src": "bin0011.png",
          "alt": "다제내성감염균(VRE/CRE 등) 참고표",
          "caption": "다제내성감염균(VRE/CRE 등) 참고표"
        }
      ]
    },
    {
      "id": "MENU011",
      "category": "I&O·전해질",
      "title": "I & O / 섭취량·배설량 / 전해질 교정",
      "aliases": [
        "I&O",
        "I/O",
        "IO",
        "intake",
        "output",
        "섭취량",
        "배설량",
        "소변량",
        "urine",
        "drain",
        "feeding",
        "수액",
        "infusion volume",
        "fluid balance",
        "전해질",
        "전해질 교정",
        "K",
        "P",
        "Mg",
        "KCL",
        "Phosten",
        "MgCl",
        "replacement",
        "positive balance",
        "negative balance",
        "I/O 마감",
        "HD I/O"
      ],
      "urgency": "routine",
      "summary": "섭취량/배설량, fluid balance, K/P/Mg 전해질 교정 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "Duty별 I/O 기준 시간을 확인한다.",
        "Infusion pump volume, 식사/feeding, Foley, drain을 합산한다.",
        "K/P/Mg replacement 처방과 주입시간을 확인한다.",
        "과한 positive balance 또는 urine 감소 시 보고한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "I&O·전해질",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0015.png",
          "alt": "섭취량 및 배설량(I&O) 기록 그림",
          "caption": "섭취량 및 배설량(I&O) 기록 그림"
        },
        {
          "src": "bin0016.png",
          "alt": "환자 유형별 I/O 불균형 예시 표",
          "caption": "환자 유형별 I/O 불균형 예시 표"
        }
      ]
    },
    {
      "id": "MENU012",
      "category": "Vital Sign",
      "title": "Vital sign: BP·HR·RR·BT",
      "aliases": [
        "Vital sign",
        "vital",
        "V/S",
        "활력징후",
        "BP",
        "혈압",
        "HR",
        "맥박",
        "RR",
        "호흡수",
        "BT",
        "체온",
        "fever",
        "hypotension",
        "hypertension",
        "tachycardia",
        "bradycardia",
        "SpO2",
        "saturation"
      ],
      "urgency": "routine",
      "summary": "BP, HR, RR, BT 변화와 상황대처 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "환자 baseline과 target을 확인한다.",
        "BP/HR/RR/BT 이상 시 통증, 발열, 출혈, 약물, 산소, rhythm을 함께 확인한다.",
        "약물 투여 전후 V/S와 effect를 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "Vital Sign",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU013",
      "category": "ABGA",
      "title": "ABGA: 혈액가스 분석과 질환",
      "aliases": [
        "ABGA",
        "혈액가스",
        "혈액가스 분석",
        "arterial blood gas",
        "pH",
        "PaCO2",
        "PaO2",
        "HCO3",
        "SaO2",
        "lactate",
        "acidosis",
        "alkalosis",
        "respiratory acidosis",
        "metabolic acidosis",
        "CO2 retention",
        "hypoxia",
        "산염기"
      ],
      "urgency": "routine",
      "summary": "ABGA 채혈, 혈액가스 분석, 산염기 이상과 관련 질환을 찾는 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "A-line 또는 동맥혈로 채혈한다.",
        "pH, PaCO2, HCO3, PaO2, lactate를 함께 본다.",
        "CO2 retention, hypoxia, metabolic acidosis 등 상황을 담당의에게 보고한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "ABGA",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0017.png",
          "alt": "ABGA 해석 4단계 공식",
          "caption": "ABGA 해석 4단계 공식"
        },
        {
          "src": "bin0018.png",
          "alt": "ABGA 대표 질환 예시",
          "caption": "ABGA 대표 질환 예시"
        },
        {
          "src": "bin0019.png",
          "alt": "동맥혈 ABGA 수행절차",
          "caption": "동맥혈 ABGA 수행절차"
        },
        {
          "src": "bin001a.png",
          "alt": "ABGA 이상 시 단계별 수행",
          "caption": "ABGA 이상 시 단계별 수행"
        }
      ]
    },
    {
      "id": "MENU014",
      "category": "신경계 사정",
      "title": "GCS / Mental / Seizure / 항경련제",
      "aliases": [
        "GCS",
        "GCS 사정",
        "GCS tip",
        "mental",
        "멘탈",
        "의식",
        "LOC",
        "motor",
        "pupil",
        "seizure",
        "seizure 종류",
        "경련",
        "발작",
        "항경련제",
        "antiepileptic",
        "Keppra",
        "Valproate",
        "Orfil",
        "phenytoin",
        "뇌압",
        "IICP",
        "neuro sign",
        "신경계 증상",
        "신경계 질환"
      ],
      "urgency": "routine",
      "summary": "GCS 사정 tip, seizure 종류, 항경련제, 신경계 증상/질환 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "GCS eye/verbal/motor를 구분해 사정한다.",
        "LOC, pupil, motor, seizure 여부를 함께 확인한다.",
        "Seizure 발생 시 시간, 양상, 지속시간, 처치, 약물, 의식회복을 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "신경계 사정",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin0013.png",
          "alt": "LOC 단계 정리 그림",
          "caption": "LOC 단계 정리 그림"
        },
        {
          "src": "bin0014.png",
          "alt": "신경계 사정 가이드",
          "caption": "신경계 사정 가이드"
        },
        {
          "src": "bin001b.png",
          "alt": "동공 크기(Pupil size) 그림",
          "caption": "동공 크기(Pupil size) 그림"
        }
      ]
    },
    {
      "id": "MENU015",
      "category": "BST·DM",
      "title": "BST / DM / 인슐린 / 혈당관리",
      "aliases": [
        "BST",
        "DM",
        "diabetes",
        "혈당",
        "BST 정상범위",
        "정상 범위",
        "저혈당",
        "고혈당",
        "상황대처",
        "bst tip",
        "insulin",
        "인슐린",
        "인슐린 종류",
        "RI",
        "Humulin",
        "휴물린",
        "sliding",
        "DKA",
        "OHA",
        "경구혈당강하제",
        "DM 약물",
        "metformin",
        "혈당관리"
      ],
      "urgency": "routine",
      "summary": "DM, BST 정상범위, 상황대처, BST tip, DM 약물, 인슐린 종류와 혈당관리 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "BST 측정 시간과 식이/NPO 여부를 확인한다.",
        "Sliding scale과 RI continuous 기준을 처방과 대조한다.",
        "저혈당 시 병원 기준에 따라 즉시 처치하고 F/U BST를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "BST·DM",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": [
        {
          "src": "bin000a.png",
          "alt": "인슐린 종류와 작용시간 그래프",
          "caption": "인슐린 종류와 작용시간 그래프"
        },
        {
          "src": "bin000b.png",
          "alt": "인슐린 제품/용법 참고 표",
          "caption": "인슐린 제품/용법 참고 표"
        },
        {
          "src": "bin000c.png",
          "alt": "경구 혈당강하제 참고 표",
          "caption": "경구 혈당강하제 참고 표"
        }
      ]
    },
    {
      "id": "MENU016",
      "category": "질환별 정리",
      "title": "질환별 정리: 심혈관·호흡기·비뇨기·신경·소화기·혈액종양·내분비·다발성",
      "aliases": [
        "질환",
        "질환별",
        "질환별 정리",
        "심혈관계",
        "호흡기계",
        "비뇨기계",
        "신경계",
        "소화기계",
        "혈액",
        "종양",
        "혈액종양",
        "내분비계",
        "다발성 질환",
        "CHF",
        "MI",
        "pneumonia",
        "COPD",
        "AKI",
        "CKD",
        "stroke",
        "ICH",
        "GI bleeding",
        "sepsis",
        "shock"
      ],
      "urgency": "routine",
      "summary": "ICU에서 자주 만나는 질환을 계통별로 검색하기 위한 카드.",
      "indications": [],
      "preparation": "routine",
      "steps": [
        "계통별 진단명과 주요 문제를 먼저 확인한다.",
        "관련 V/S, lab, 영상, 약물, 처치, I/O를 연결해서 본다.",
        "질환별 위험징후와 notify 기준을 정리한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "질환별 정리",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU017",
      "category": "입퇴원·전원·사망",
      "title": "입퇴원 / 전원 / 전동 / 사망 업무",
      "aliases": [
        "입퇴원",
        "입원",
        "퇴원",
        "전원",
        "전동",
        "사망",
        "입실",
        "전실",
        "응급실",
        "외래",
        "병동 전입",
        "병동전입",
        "퇴실",
        "discharge",
        "transfer",
        "death",
        "사후처치",
        "영안실",
        "전동간호기록",
        "가퇴원",
        "이동서식",
        "퇴원처방"
      ],
      "urgency": "routine",
      "summary": "입실, 퇴원, 전동, 전원, 사망 시 필요한 실무 절차 검색 카드.",
      "indications": [],
      "preparation": "urgent",
      "steps": [
        "입실 시 모니터, V/S, line/tube/drain, 동의서, 지참약, 보호자 연락처를 확인한다.",
        "전동/전원 시 인계서류, 약물, 검사결과, 산소/라인 상태를 확인한다.",
        "사망 시 사망선고, 사후처치, 보호자 안내, 서류 절차를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "입퇴원·전원·사망",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "MENU018",
      "category": "주치의·과별",
      "title": "주치의 / 과별 특이사항",
      "aliases": [
        "주치의",
        "과별",
        "과별 특이사항",
        "원장님",
        "원장님 routine",
        "특이사항",
        "NS",
        "OS",
        "내과",
        "심장내과",
        "신장내과",
        "소화기내과",
        "신경외과",
        "정형외과",
        "routine",
        "set order",
        "처방패턴",
        "주치의별"
      ],
      "urgency": "routine",
      "summary": "각과 및 주치의별 routine, set order, 특이 지시를 모아두는 카드.",
      "indications": [],
      "preparation": "routine",
      "steps": [
        "과별 선호 lab, 영상, dressing, 항생제, 항응고제, 식이 패턴을 확인한다.",
        "원장님별 특이 지시는 인계와 카드에 계속 업데이트한다.",
        "routine과 다른 처방은 담당의 지시를 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tags": [
        "주치의·과별",
        "v14_v11_based_menu",
        "search_optimized"
      ],
      "review": {
        "status": "v14_v11_based_main_menu",
        "rule": "V11 기반, 윌스 심볼 제거, 첫화면 실무메뉴 및 검색어 확장"
      },
      "source_refs": [
        "사용자 제시 V14 첫화면 카테고리"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "EQUIP031",
      "category": "의료장비/Infusion Pump",
      "title": "Infusion pump B.Braun 사용법과 알람 대처",
      "aliases": [
        "infusion pump",
        "인퓨전펌프",
        "B.Braun",
        "B braun",
        "pump alarm",
        "Low battery",
        "Occlusion",
        "Air",
        "Door",
        "Complete",
        "수액펌프",
        "주입속도",
        "주입용량"
      ],
      "urgency": "routine",
      "summary": "B.Braun infusion pump 기본 사용 순서와 주요 알람별 대처.",
      "indications": [],
      "preparation": [],
      "steps": [
        "지정된 수액세트를 fluid에 연결하고 air가 없도록 통과시킨다.",
        "전원을 켜고 infusion pump의 튜빙 클램프를 연다.",
        "주입세트를 pump 전면 door에 끼지 않게 위아래 방향을 확인해 고정한다.",
        "전면 door를 닫고 주입 속도와 용량을 선택한다.",
        "클램프를 열고 start를 누른다.",
        "주입 종료 시 수액세트를 클램핑한 상태에서 door를 연다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "Alarm 발생 시 stop을 누른 뒤 수액세트를 클램핑하고 원인 해결 후 사용한다.",
        "Occlusion은 line clamp, 3-way, 조절기 잠김, IV line function을 확인한다."
      ],
      "related": [],
      "tables": [
        {
          "title": "Infusion pump 알람 및 대처",
          "headers": [
            "알람",
            "의미",
            "대처"
          ],
          "rows": [
            [
              "Low battery",
              "배터리 잔량 30분 이내",
              "전원/배터리 연결"
            ],
            [
              "Occlusion",
              "라인 꼬임, 장착 오류, 바늘/3-way/조절기 막힘",
              "Line clamp, 3-way 방향, IV function 확인"
            ],
            [
              "Air",
              "Air sensor가 공기 감지 또는 수액 종료",
              "Air 제거, 수액 잔량 확인"
            ],
            [
              "Door",
              "주입 중 door open",
              "Door 재장착 후 재시작"
            ],
            [
              "Complete",
              "총 주입 예정량 완료",
              "처방 확인 후 종료 또는 추가 설정"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "의료장비/Infusion Pump",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "ROUTINE030",
      "category": "Routine/교체주기",
      "title": "ICU 교체 주기 정리",
      "aliases": [
        "교체주기",
        "교체 주기",
        "Q-syte",
        "q site",
        "nebulizer",
        "vent circuit",
        "박테리아 필터",
        "엔코",
        "HFNC",
        "CRRT kit",
        "IV",
        "A-line kit",
        "C-line dx",
        "PICC dx",
        "closed suction catheter",
        "feeding bag",
        "T-tube portex",
        "수요일",
        "일요일",
        "extension",
        "3-way"
      ],
      "urgency": "routine",
      "summary": "ICU에서 자주 확인하는 소모품, line, circuit, dressing 교체 주기.",
      "indications": [],
      "preparation": [],
      "steps": [
        "수요일/일요일 Night 근무자가 extension, 3-way, Q-syte 교체를 확인한다.",
        "교체일자는 Cadex/기본간호/부착기구/차팅에 맞춰 정리한다.",
        "감염징후, oozing, contamination이 있으면 정해진 주기보다 먼저 교체 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "ICU 교체 주기",
          "headers": [
            "항목",
            "교체 주기"
          ],
          "rows": [
            [
              "Q-syte",
              "3일"
            ],
            [
              "Nebulizer",
              "7일"
            ],
            [
              "Vent circuit",
              "14일"
            ],
            [
              "박테리아 필터",
              "3일"
            ],
            [
              "엔코",
              "7일"
            ],
            [
              "HFNC",
              "14일"
            ],
            [
              "CRRT kit",
              "3일"
            ],
            [
              "IV",
              "4일"
            ],
            [
              "A-line kit",
              "7일"
            ],
            [
              "C-line / PICC / A-line dressing",
              "7일"
            ],
            [
              "L-tube",
              "1개월"
            ],
            [
              "Closed suction catheter",
              "3일"
            ],
            [
              "Feeding bag 보관",
              "7일"
            ],
            [
              "T-tube portex",
              "14일"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "Routine/교체주기",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "ROUTINE031",
      "category": "Routine/투약시간",
      "title": "약물 투약 시간과 Feeding 시간",
      "aliases": [
        "투약시간",
        "약물 시간",
        "QD",
        "BID",
        "TID",
        "QID",
        "nebulizer 시간",
        "콜리스틴",
        "Feeding 시간",
        "경관식",
        "약 시간",
        "간호액팅 스케줄링"
      ],
      "urgency": "routine",
      "summary": "QD/BID/TID/QID 투약 시간과 nebulizer, feeding 기본 시간.",
      "indications": [],
      "preparation": [],
      "steps": [
        "처방 용법에 맞춰 간호액팅 스케줄을 익일까지 확인한다.",
        "항생제/Orfil 등 예외 스케줄은 과별/처방별 지시를 우선한다.",
        "경관식 환자는 저녁 식이 신청 시 익일 아침 분량을 remark로 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "약물 투약 시간",
          "headers": [
            "용법",
            "시간"
          ],
          "rows": [
            [
              "QD",
              "09:00"
            ],
            [
              "BID",
              "09:00 / 21:00"
            ],
            [
              "TID",
              "06:00 / 14:00 / 22:00"
            ],
            [
              "QID",
              "06:00 / 12:00 / 18:00 / 23:59"
            ],
            [
              "Nebulizer 4회",
              "07:00 / 12:00 / 17:00 / 21:00"
            ],
            [
              "콜리스틴",
              "07:00 / 17:00"
            ]
          ]
        },
        {
          "title": "Feeding 시간",
          "headers": [
            "구분",
            "시간/메모"
          ],
          "rows": [
            [
              "Feeding",
              "07:30 / 12:00 / 17:00"
            ],
            [
              "경관식",
              "저녁 식이 2개 신청, remark에 익일 아침 분량 메모"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "Routine/투약시간",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "PREP001",
      "category": "준비물/시술·배액관",
      "title": "상황별 준비물: irrigation, C-line, suture, sputum cx, CTD, EVD",
      "aliases": [
        "상황별 준비",
        "준비물",
        "Bladder irrigation",
        "Subclavian insertion",
        "C-line insertion",
        "suture 준비",
        "sputum cx",
        "CTD insertion",
        "NS OP drain",
        "EVD 배액관",
        "tip cx",
        "배액관 제거",
        "배액관 삽입",
        "thoracostomy",
        "chest tube"
      ],
      "urgency": "routine",
      "summary": "배액관 삽입/제거, 중심정맥관 삽입, suture, sputum culture, CTD, EVD 관련 준비물.",
      "indications": [],
      "preparation": [
        "Bladder irrigation: 일회용 D-set, 곡반, 생리식염수, enema syringe 50cc",
        "Subclavian insertion: 큐라셋, suture set, N/S, 거즈, 헥시알, sponge ball, mass 11, 10cc syringe, 23G needle, nylon 2-0/3-0, C-line catheter, sono probe 멸균 비닐, glove, 소독포, 소공포, 수술가운, 리도카인, Tegaderm CHG",
        "Suture: suture set, 베타딘, sponge ball, nylon 2-0, 거즈 많이, mass 11, glove, 레노픽스",
        "Sputum cx: specimen cup, glove, suction 배액줄, ET-tube PVC catheter, T-tube, oro/nasal suction 시 latex catheter, airway, N/S",
        "CTD insertion: thoracostomy set, 베타딘, sponge ball, 거즈, mass, syringe/needle, nylon 2-0, chest bottle, chest tube 24Fr, chest stand, glove, 소공포, 레노픽스, 불소독 Kelly",
        "NS OP drain 제거: suture set, 베타딘, sponge ball, nylon 2-0, 거즈, 메디폼, glove, 소공포, 레노픽스",
        "EVD 배액관 비우기: 일회용 dressing set, 베타딘, sponge ball 또는 포스틱스왑, 거즈, glove, 고무줄"
      ],
      "steps": [],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "상황별 핵심 준비물 요약",
          "headers": [
            "상황",
            "핵심 준비물"
          ],
          "rows": [
            [
              "Bladder irrigation",
              "D-set, 곡반, N/S, enema syringe 50cc"
            ],
            [
              "Subclavian insertion",
              "C-line catheter, suture set, sono probe cover, 리도카인, Tegaderm CHG"
            ],
            [
              "Sputum cx",
              "specimen cup, suction line, ET PVC catheter, airway, N/S"
            ],
            [
              "CTD insertion",
              "Thoracostomy set, chest tube 24Fr, chest bottle, chest stand"
            ],
            [
              "EVD 배액관 비움",
              "D-set, 베타딘, 멸균장갑, 거즈, 고무줄"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "준비물/시술·배액관",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "DRUG030",
      "category": "임상 약물/항생제",
      "title": "항생제 AST 시행 여부",
      "aliases": [
        "항생제 AST",
        "AST 유무",
        "AST 시행",
        "AST 안함",
        "유박탐",
        "타박탐",
        "벤제타실",
        "세파제돈",
        "세파졸린",
        "제티암",
        "후루마린",
        "타짐",
        "타포신",
        "트리악손",
        "뉴디짐",
        "맥스핌",
        "오로페넴",
        "아미카신",
        "겐타마이신",
        "반코마이신",
        "하노마이신",
        "사이톱신",
        "레포신"
      ],
      "urgency": "urgent",
      "summary": "ICU에서 자주 사용하는 항생제의 AST 시행 여부를 빠르게 확인하는 카드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "항생제 투여 전 처방명과 AST 필요 여부를 확인한다.",
        "과거 알레르기, AST 결과, 투여 전 V/S를 확인한다.",
        "AST 여부는 병원 최신 지침과 약제부 기준을 우선한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "AST 시행 항생제 / 미시행 항생제",
          "headers": [
            "구분",
            "계열",
            "약물"
          ],
          "rows": [
            [
              "AST O",
              "Penicillin계",
              "유박탐, 벤제타실, 타박탐"
            ],
            [
              "AST O",
              "Cepha 1세대",
              "세파제돈, 세파졸린"
            ],
            [
              "AST O",
              "Cepha 2세대",
              "제티암, 후루마린"
            ],
            [
              "AST O",
              "Cepha 3세대",
              "타짐, 타포신, 트리악손, 뉴디짐"
            ],
            [
              "AST O",
              "Cepha 4세대",
              "맥스핌"
            ],
            [
              "AST O",
              "Carbapenem계",
              "오로페넴"
            ],
            [
              "AST X",
              "Aminoglycoside",
              "신풍아미카신, 겐타마이신"
            ],
            [
              "AST X",
              "Vancomycin",
              "반코마이신, 하노마이신"
            ],
            [
              "AST X",
              "Quinolone",
              "사이톱신, 레포신"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "임상 약물/항생제",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "LAB030",
      "category": "검사·검체/검체통",
      "title": "검체 통과 채혈·ABGA 실무",
      "aliases": [
        "검체통",
        "검체 병",
        "c-difficile",
        "CDT",
        "stool ob통",
        "UA bottle",
        "Urine Analysis",
        "Urine Culture",
        "코니컬튜브",
        "슈터기",
        "일반캐리어",
        "오토캐리어",
        "ABGA",
        "A-line 채혈",
        "리거즈",
        "regurge",
        "바코드 발행",
        "DIC 바코드"
      ],
      "urgency": "routine",
      "summary": "Lab bottle 외 stool/urine 검체통, ABGA 채혈, 슈터기 carrier 구분.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Lab 처방은 처방보조 → 채혈접수업무 → 대상자 채혈접수/바코드 발행 후 검체통에 부착한다.",
        "DIC는 바코드 재발행이 필요할 수 있고 2개 출력 여부를 확인한다.",
        "A/C-line 채혈 시 리거즈 10ml 후 채혈하고 잘 안되면 flushing을 고려한다.",
        "ABGA는 1ml만 있어도 가능하며 A-line에서 혈액 뽑아 syringe 채로 기기에 연결한다.",
        "ABGA 기기에서 니들이 나오면 니들 제거 후 syringe로 누르고 바코드를 스캔한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "검체통 종류",
          "headers": [
            "검사",
            "검체통/용기"
          ],
          "rows": [
            [
              "C-difficile / CDT",
              "Stool OB통, 블랙"
            ],
            [
              "Urine Analysis / UA",
              "투명한 뚜껑 긴 bottle"
            ],
            [
              "Urine Culture",
              "코니컬 튜브"
            ],
            [
              "슈터기",
              "투명: 일반캐리어 / 유색: 오토캐리어"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "검사·검체/검체통",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "ROUTINE032",
      "category": "Routine/식이",
      "title": "ICU 식이 확인과 경관식 입력",
      "aliases": [
        "식이",
        "NPO",
        "금식",
        "Feeding",
        "경관유동식",
        "당뇨식",
        "칼로리",
        "Remark",
        "뉴케어 KD",
        "신장식",
        "Wet 거즈",
        "추가식사",
        "경관식",
        "식이입력"
      ],
      "urgency": "routine",
      "summary": "NPO, feeding, 당뇨식, 신장 환자 식이, 경관식 추가 신청 실무.",
      "indications": [],
      "preparation": [],
      "steps": [
        "NPO 환자는 식이를 금식으로 확인한다.",
        "Feeding 환자는 경관유동식으로 확인한다.",
        "당뇨식은 칼로리를 입력하고 특이처방은 remark에 기록한다.",
        "뉴케어 KD는 신장 기능이 안 좋은 환자 식이로 확인한다.",
        "NPO 환자가 목마름을 호소하면 wet gauze 적용 여부를 확인한다.",
        "신환은 식이 확인 후 제공하고, 추가식사는 식이 추가 신청을 확인한다.",
        "경관식은 저녁 식이 신청 시 remark에 익일 아침 분량도 메모한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "Routine/식이",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "ROUTINE033",
      "category": "Routine/Initial·전산",
      "title": "Initial 후 전산: 낙상·욕창·통증·Bundle·Flow sheet·보호대",
      "aliases": [
        "Initial 후 전산",
        "initial",
        "낙상",
        "욕창",
        "통증",
        "낙욕통",
        "Bundle",
        "Flow sheet",
        "신체보호대 평가",
        "보호대",
        "ICU flowsheet",
        "체위변경표",
        "통증 재평가",
        "effect",
        "D 0800",
        "E 1600",
        "N 2300",
        "massage X"
      ],
      "urgency": "routine",
      "summary": "매 근무 initial 후 입력해야 하는 낙상, 욕창, 통증, bundle, flow sheet, 신체보호대 평가 정리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "매 근무 initial은 위에서 아래로 환자가 그려지듯이 신경계, 호흡기계, 순환기계, Foley, Vent, line, L-tube, 신체보호대를 확인한다.",
        "Pulse oximeter 위치, 수액세트 line, 신체보호대 상태를 확인한다.",
        "낙상/욕창/통증 평가는 D 08:00, E 16:00, N 23:00 기준으로 확인한다.",
        "욕창은 Night 때 재평가하고 시간 2개를 수정하며 마사지 금지를 확인한다.",
        "욕창 체위변경표는 2시간마다 겹치지 않게 입력한다.",
        "통증은 initial 1회와 진통제 투약 후 effect를 확인한다.",
        "Inject는 30분 후, PO는 1시간 후 F/U를 확인한다.",
        "Bundle은 중심정맥관, Foley, C-line, Vent 등 해당 항목을 입력한다.",
        "Flow sheet는 D 08:00-13:59, E 16:00-21:59, N 00:00-05:59 기준으로 작성한다.",
        "신체보호대 평가는 2시간 단위로 확인하고 정방향 매듭 및 부위를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "Initial 후 전산 시간 기준",
          "headers": [
            "항목",
            "시간/기준"
          ],
          "rows": [
            [
              "낙상·욕창·통증",
              "D 08:00 / E 16:00 / N 23:00"
            ],
            [
              "Flow sheet",
              "D 08:00-13:59 / E 16:00-21:59 / N 00:00-05:59"
            ],
            [
              "신체보호대 평가",
              "2시간 단위"
            ],
            [
              "통증 effect",
              "Inject 30분 후 / PO 1시간 후"
            ]
          ]
        }
      ],
      "images": [
        {
          "src": "bin0006.png",
          "alt": "NRS 통증 평가 척도",
          "caption": "NRS 통증 평가 척도"
        },
        {
          "src": "bin0007.png",
          "alt": "FLACC 통증 평가 척도",
          "caption": "FLACC 통증 평가 척도"
        },
        {
          "src": "bin0008.png",
          "alt": "FPS 통증 평가 척도",
          "caption": "FPS 통증 평가 척도"
        }
      ],
      "tags": [
        "Routine/Initial·전산",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "IO030",
      "category": "I&O·전해질/I&O",
      "title": "I/O 입력과 마감 상세",
      "aliases": [
        "I/O 마감",
        "I/O 입력",
        "섭취량",
        "배설량",
        "Parenteral",
        "Urine",
        "infusion pump volume",
        "식사 100 400",
        "Foley",
        "PO water",
        "inj 50cc",
        "FD feeding",
        "HD I/O",
        "Anti 입력",
        "배액관 I/O",
        "클램프",
        "음압 재설정",
        "positive balance"
      ],
      "urgency": "routine",
      "summary": "Duty별 I/O 기준, infusion volume, 식사/물/feeding, 배액관 측정과 마감 요령.",
      "indications": [],
      "preparation": [],
      "steps": [
        "I/O 기준은 D 06-13, E 13-21, N 21-06으로 확인한다.",
        "라운딩 시 main fluid, 간호액팅의 side를 확인 후 입력한다.",
        "6/13/21시 injection은 다음 duty 시간 기준으로 입력한다.",
        "배액관 I/O는 syringe로 정확히 측정한다.",
        "I/O 마감 시 약별 infusion pump volume을 확인하고 zeroing한다.",
        "I/O는 infusion volume + 식사(100%=400) + Foley + 물 섭취량을 합산한다.",
        "Infusion 사용하지 않은 side 약물은 바로바로 입력한다.",
        "PO water는 물병에 선을 긋고 날짜와 duty를 표시한다.",
        "Injection 50cc 미만은 I/O에 넣지 않고, PO 1회 물 50, FD feeding을 확인한다.",
        "Parenteral과 urine을 비교해 과한 positive balance가 있으면 Noti한다.",
        "배액관 측정 시 clamp 후 종이컵에 따르고 알코올 swab으로 닦은 후 음압을 재설정한다.",
        "HD I/O는 투석기록지를 확인한다.",
        "Anti 입력 시 이름에는 Anti만 입력하고 N/S는 적지 않는다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "Duty별 I/O 기준",
          "headers": [
            "Duty",
            "시간"
          ],
          "rows": [
            [
              "Day",
              "06:00-13:00"
            ],
            [
              "Evening",
              "13:00-21:00"
            ],
            [
              "Night",
              "21:00-06:00"
            ]
          ]
        }
      ],
      "images": [
        {
          "src": "bin0015.png",
          "alt": "섭취량 및 배설량(I&O) 기록 그림",
          "caption": "섭취량 및 배설량(I&O) 기록 그림"
        },
        {
          "src": "bin0016.png",
          "alt": "환자 유형별 I/O 불균형 예시 표",
          "caption": "환자 유형별 I/O 불균형 예시 표"
        }
      ],
      "tags": [
        "I&O·전해질/I&O",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "LINE030",
      "category": "Line/부착기구",
      "title": "부착기구 입력: HD cath, Mahurkar, Perm cath",
      "aliases": [
        "부착기구",
        "Cadex 기본간호",
        "기구입력",
        "HD Cath",
        "trialysis",
        "3 lumen",
        "마후카",
        "Mahurkar",
        "Perm Cath",
        "투석용 카테터",
        "비터널형",
        "터널형",
        "동의서 다름"
      ],
      "urgency": "routine",
      "summary": "Cadex 기본간호와 부착기구 입력 시 HD cath, Mahurkar, Perm cath 구분.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Foley, L-tube, dressing, IV, O2 등 변경 시 간호기록, 간호처방, Cadex 기본간호, flow sheet를 같이 수정한다.",
        "HD Cath는 trialysis 3 lumen 여부를 확인 후 입력한다.",
        "Mahurkar는 2-lumen 마후카 카테터 부위를 따로 입력한다.",
        "Mahurkar는 비터널형, Perm Cath는 터널형 투석용 카테터로 동의서가 다르다.",
        "Foley는 부착기구와 Bundle까지 작성한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "Line/부착기구",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "MED030",
      "category": "지참약",
      "title": "지참약 식별 의뢰와 셀프처방",
      "aliases": [
        "지참약",
        "자가약",
        "식별의뢰",
        "지참약 관리",
        "지참약 식별의뢰서",
        "약국",
        "6211",
        "6212",
        "셀프처방",
        "Self",
        "지참약 검색",
        "지참약품정보",
        "응급발행",
        "식별 완료",
        "스케줄"
      ],
      "urgency": "routine",
      "summary": "자가약 반입 시 식별의뢰, 약국 전달, 셀프처방, 주치의 Noti 절차.",
      "indications": [],
      "preparation": [],
      "steps": [
        "투여 전 지참약 관리에서 실물, 약품, 처방용량을 재확인한다.",
        "자가약이 오면 지참약 식별의뢰서를 작성하고 EMR로 신청 후 약국으로 보낸다.",
        "지참약 관리에서 의뢰를 누른 후 아침/점심/저녁약을 구분해 실물 약을 약국으로 보낸다.",
        "의뢰서에는 번호 6211, 6212를 확인한다.",
        "지참약 검색에서 약을 입력하고 지참약품정보에 뜨면 가져오기 후 수량/용법을 입력한다.",
        "간호처방 Self 카테고리를 켜고 지참약 설정을 누른 뒤 처방 화면으로 이동해 응급발행한다.",
        "지참약 식별 완료 후 주치의에게 Noti한다.",
        "지참약 식별 결과는 D duty에 나오는 경우가 많으므로 E 전 확인 후 Noti 및 스케줄을 조정한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "지참약",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "NARC030",
      "category": "마약·향정",
      "title": "마약 Pink / 향정 White 관리 상세",
      "aliases": [
        "마약 Pink",
        "향정 White",
        "마약장 6029",
        "비치마약",
        "마약 prep",
        "마약 처방전",
        "재출력",
        "출력",
        "error",
        "반납처방전",
        "핑크",
        "마약 반납",
        "마약 봉투",
        "DC",
        "공병",
        "잔량",
        "앰플"
      ],
      "urgency": "urgent",
      "summary": "마약 사용 후 공병/잔량 보관, prep 마약 처방전, 반납처방전 출력과 반납 절차.",
      "indications": [],
      "preparation": [],
      "steps": [
        "마약장 번호 6029를 확인한다.",
        "마약 사용 후 앰플과 잔량은 버리지 않고 처방 봉투에 재보관한다.",
        "마약 prep을 사용했으면 다음날 아침 당직의로 처방을 넣어 처방전을 내린다.",
        "사용한 prep 마약 라벨은 마약 처방전에 붙이고, 공병은 봉투에 담아 금고 안에 넣는다.",
        "처방된 마약이 왔는지는 마약 처방전 출력 내역에서 확인한다.",
        "재출력이면 마약장에 실제 약이 있는지 확인하고, 없으면 출력/작성 또는 재출력에 error 표시를 확인한다.",
        "다음날 처방 마약이 있으면 응급발행 후 마약 처방전을 분홍색 종이에 출력하고 서명한다.",
        "마약 반납 시 마약처방전에서 반납처방전(핑크)을 출력하고 서명한다.",
        "마약 금고에서 약과 봉투를 확인한 후 라벨에 /DC를 적고 반납처방전을 접어 봉투에 넣어둔다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "마약·향정",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "CHART030",
      "category": "간호기록",
      "title": "ICU 간호기록 체크리스트",
      "aliases": [
        "간호기록",
        "차팅",
        "네뷸 차팅",
        "prn 차팅",
        "산소 변경",
        "약 용량 변경",
        "회진",
        "면회",
        "지참약 식별 차팅",
        "검사결과 Notify",
        "검사결과 복사",
        "OP 후 Dressing 사진",
        "IPC 기록",
        "Lasix BP",
        "페치딘 기록",
        "RI 2시간 F/U",
        "hourly check",
        "line 제거 차팅",
        "Nebulizer 기록",
        "Feeding 기록"
      ],
      "urgency": "routine",
      "summary": "ICU에서 자주 누락되는 간호기록 항목과 투약/검사/회진/line 관련 차팅 포인트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Nebulizer, PRN 투약 후 액팅, Cadex, 간호기록을 확인한다.",
        "산소 변경, 약 용량 변경, PRN 투여는 기록한다.",
        "회진, 면회 시행, 지참약 식별 관련 내용을 차팅한다.",
        "회진 전 약, 검사결과, V/S, BST를 확인한다.",
        "검사결과 확인 후 Notify 내용을 차팅한다.",
        "검사결과는 더블클릭해 간호기록에 복사할 수 있다.",
        "시술 후/OP 후 첫 dressing 사진은 EMR 수술 후 사진과 기록을 넣는다.",
        "Lasix 등 BP medication 전 BP를 확인하고 V/S 메모와 투여 기록을 남긴다.",
        "페치딘 투여 시 V/S, 호흡억제/저혈압 side를 확인하고 기록한다.",
        "RI 투여 후 2시간 뒤 BST F/U를 확인한다.",
        "Hemovac, urine hourly는 hourly check 서식지를 이용한다.",
        "Line 제거 시 간호기록, 기본간호, 부착기구, flow sheet를 수정한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "간호기록",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "ORDER030",
      "category": "처방·액팅",
      "title": "간호처방과 액팅: Lab, pickup, 응급발행",
      "aliases": [
        "간호처방",
        "액팅",
        "Cadex 기본간호",
        "Foley 처방",
        "L-tube 처방",
        "Dressing 처방",
        "IV 처방",
        "O2 처방",
        "O2 inhalation",
        "HFNC 수가",
        "Vent 수가",
        "simple dressing",
        "피하주사 pee",
        "nebulizer 처방",
        "Lab 처방",
        "채혈접수업무",
        "픽업",
        "응급발행",
        "10:30",
        "마약 픽업",
        "퇴원약 픽업",
        "ICU Chest",
        "Portable Y",
        "bed side PT"
      ],
      "urgency": "routine",
      "summary": "간호처방, 액팅 스케줄링, Lab 처방 발행, pickup과 응급발행 기준.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Foley, L-tube, dressing, IV, O2 변경 시 간호기록, 간호처방, Cadex 기본간호, flow sheet를 함께 확인한다.",
        "Nasal/Mask 산소 사용 시 O2 inhalation 처방을 산소 L/min와 함께 확인한다.",
        "HFNC와 Vent는 별도 수가처방이 있다.",
        "Simple dressing은 1일 부위당 1회만 처방 가능 여부를 확인한다.",
        "사용한 처치/재료는 누락 없이 처방을 넣는다.",
        "새로운 처방은 용법에 맞춰 다음날까지 간호액팅 스케줄링한다.",
        "Lab 처방은 처방보조 → 채혈접수업무에서 바코드를 발행한다.",
        "검사 처방은 검사실에 전화해 시간 확인 후 차팅, 인계, Cadex 작성한다.",
        "추가 처방은 새로고침해 확인한다.",
        "ICU Chest는 간호처방에서 Portable Y를 확인한다.",
        "오전 10:30 이전은 픽업, 이후는 응급발행을 기준으로 한다.",
        "마약, 향정, 퇴원약도 응급발행이 필요할 수 있다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "처방·액팅",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "DNR030",
      "category": "DNR",
      "title": "DNR / 연명의료 서류와 처방",
      "aliases": [
        "DNR",
        "연명의료",
        "연명의료중단결정서",
        "별도서식 9",
        "별도서식 10",
        "별도서식 11",
        "별도서식 13",
        "사전연명의료의향서",
        "가족관계증명서",
        "신분증",
        "사회복지사 139",
        "AWU501",
        "AWU210",
        "AWU230",
        "AWU240",
        "DNR 체크표"
      ],
      "urgency": "routine",
      "summary": "DNR 및 연명의료 관련 별도서식, 신분증/가족관계증명서, 사회복지사 연락, 처방료 코드.",
      "indications": [],
      "preparation": [],
      "steps": [
        "DNR은 별도서식 9, 11, 13호를 기본 확인한다.",
        "11호는 가족에게, 13호에는 하지 않는 항목들을 체크한다.",
        "신분증 앞뒤 복사, 환자 기준 가족관계증명서(주민번호 포함)를 준비한다.",
        "서식과 증빙을 파일에 넣고 이름 라벨을 붙이며 DNR 체크표를 침상에 둔다.",
        "DNR 서류를 받은 뒤 관련 처방을 넣고 사회복지사 139방에 연락한다.",
        "사전연명의료의향서 O: 9, 10, 13호와 신분증 사본.",
        "사전연명의료의향서 X: 9, 11, 13호, 가족관계증명서, 신분증 사본."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "연명의료 관련 처방료 코드",
          "headers": [
            "항목",
            "코드"
          ],
          "rows": [
            [
              "협진료",
              "AWU501 / 9호"
            ],
            [
              "계획료",
              "AWU210 / 10호"
            ],
            [
              "계획료",
              "AWU230 / 11호"
            ],
            [
              "이행 관리료",
              "AWU240 / 13호"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "DNR",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "EKG030",
      "category": "검사/EKG",
      "title": "EKG 촬영과 리드 부착",
      "aliases": [
        "EKG",
        "ECG",
        "심전도",
        "EKG 접수",
        "부서접수",
        "환자 선택",
        "전극 연결",
        "record",
        "network",
        "RU",
        "LU",
        "RL",
        "LL",
        "빨노검초",
        "액와중앙선",
        "EKG Scan",
        "침습적"
      ],
      "urgency": "routine",
      "summary": "EKG 접수, 전극 연결, 리드 위치, scan 업로드 포인트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "EKG 접수 및 부서접수 업무로 대상자를 등록한다.",
        "EKG 장비에서 환자를 선택하고 전극을 연결한다.",
        "Record → Network로 전송한다. 연결이 잘 안 되면 알코올로 피부를 닦는다.",
        "EKG 리드에 닿는 물건이 없고 line이 겹치지 않게 정리한다.",
        "사지 리드는 RU 빨강, LU 노랑, RL 검정, LL 초록을 확인한다.",
        "흉부 리드는 빨/노/초/회/검/보 순서와 위치를 확인한다.",
        "사지 전극은 안쪽 아래로 가게 부착한다.",
        "촬영 후 침습적으로 표시가 있으면 EKG Scan에 캡처하여 올린다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "사지 리드 색상",
          "headers": [
            "위치",
            "색상"
          ],
          "rows": [
            [
              "RU",
              "빨강"
            ],
            [
              "LU",
              "노랑"
            ],
            [
              "RL",
              "검정"
            ],
            [
              "LL",
              "초록"
            ]
          ]
        }
      ],
      "images": [
        {
          "src": "bin0012.png",
          "alt": "Bedside monitor 예시 사진",
          "caption": "Bedside monitor 예시 사진"
        }
      ],
      "tags": [
        "검사/EKG",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "SKILL030",
      "category": "술기/Injection",
      "title": "Injection / 3-way / IVS 실무 Tip",
      "aliases": [
        "inject",
        "injection",
        "MIV",
        "IVS",
        "3-way",
        "3way",
        "bolus",
        "flushing",
        "micro syringe",
        "TPN",
        "Cefa",
        "수혈 3way",
        "RI F/U",
        "우리 스틴",
        "페르디핀",
        "mannitol",
        "IM",
        "리거즈",
        "PICC flushing",
        "A-line zeroing",
        "EVD zeroing",
        "액팅체크"
      ],
      "urgency": "routine",
      "summary": "MIV, IVS, 3-way, flushing, TPN/항생제 line, RI F/U, IM, zeroing 등 injection 실무 팁.",
      "indications": [],
      "preparation": [],
      "steps": [
        "MIV는 1시간 내 투여를 기준으로 생각한다.",
        "3-way bolus 시 방향을 확인하고, 안 쓰는 3-way는 line과 반대방향으로 돌려놓는다.",
        "IVS 시 air를 최대한 제거하고 필요 시 micro syringe 처방을 확인한다.",
        "Main fluid 없는 환자는 IVS 후 N/S flushing을 필수로 한다.",
        "TPN과 Cefa 계열은 같은 line 사용을 피한다.",
        "수혈이 잘 안 들어가면 3-way로 N/S를 조금씩 넣어주는 방법을 확인한다.",
        "인슐린 투여 후 BST 2시간 F/U를 확인한다.",
        "PO는 1시간 후, injection은 30분 후 effect를 확인한다.",
        "Anti 간격을 맞춰준다.",
        "페르디핀 투여 중이면 1시간마다 BP check를 확인한다.",
        "만니톨은 full drop 투여 여부를 확인한다.",
        "IM은 리거즈 후 투여하고 투여 후 문지른다.",
        "PICC 후 flushing 후 infusion line을 연결한다.",
        "A-line, EVD zeroing은 3-way 방향을 확인한다.",
        "Injection 연결 후 액팅 체크를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "투약과 line compatibility는 병원 지침, 처방, 약제부 기준을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "술기/Injection",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "SKILL031",
      "category": "술기/기본간호",
      "title": "기본 술기: Fever, L-tube, Feeding, TR band, Foley",
      "aliases": [
        "기본술기",
        "37.5",
        "ice pack",
        "L-tube",
        "feeding",
        "regurge",
        "residual",
        "duoderm",
        "Ace vac",
        "clamping",
        "Face care",
        "구강케어",
        "탄륨",
        "TR band",
        "CAG",
        "PCI",
        "puncture",
        "Foley ballooning",
        "증류수"
      ],
      "urgency": "routine",
      "summary": "Fever care, L-tube feeding, residual, face/oral care, TR band, Foley ballooning 등 실무 팁.",
      "indications": [],
      "preparation": [],
      "steps": [
        "BT 37.5 이상이면 ice pack 적용 여부를 확인한다.",
        "L-tube feeding 전 regurge로 공기를 제거하고 잔여량을 확인한다.",
        "L-tube 코 삽입부위는 duoderm으로 보호한다.",
        "Ace vac PO 투여 후 clamp 또는 1-2시간 후 연결을 확인한다.",
        "Feeding residual이 많아 skip 시 기록하고 Noti한다.",
        "물티슈로 face care를 시행한다.",
        "탄륨과 거즈를 이용해 구강 care를 시행한다.",
        "CAG/PCI 후 TR band는 공기 제거 후 지혈 여부를 확인하고 제거한다.",
        "Puncture 부위 바로 위 Air 부분이 들어가지 않게 확인한다.",
        "지혈 확인 후 betadine과 superpore dressing을 적용한다.",
        "Foley ballooning은 증류수로 한다. N/S는 결정이 생길 수 있다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "술기/기본간호",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "TF030",
      "category": "수혈",
      "title": "수혈 실무 Tip과 혈액제제 종류",
      "aliases": [
        "수혈 tip",
        "P-RBC",
        "교차시험",
        "ABO Rho",
        "irregular",
        "혈액요청서",
        "슈터기",
        "진검실",
        "혈액불출",
        "수혈기록지",
        "PC",
        "Cryo",
        "FFP",
        "APLT",
        "페르시스",
        "수혈 filter",
        "페니라민",
        "blood pumping",
        "A-PLT 250",
        "CRYO 40",
        "뮤코필터레이트",
        "fibrinogen",
        "PT INR"
      ],
      "urgency": "urgent",
      "summary": "수혈 준비부터 혈액 불출, 수혈기록, I/O, 혈액제제 종류와 기대효과까지 정리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "수혈 처방이 나면 혈액요청서와 빨강 2개, 보라 1개에 혈액을 담아 내린다.",
        "P-RBC는 교차시험 처방세트와 ABO+Rho, irregular, 수혈용 추가 생성을 확인한다.",
        "채혈자와 혈액요청서 이름을 맞추고 요청서와 검체를 고무줄로 묶어 슈터기에 넣는다.",
        "보낸 후 진검실에 연락해 확인을 요청한다.",
        "혈액은 진검 로비층에서 불출하며 P-RBC는 ice pack 포함 여부를 확인한다.",
        "여러 팩을 동시에 수혈할 경우 수혈기록지는 1장 사용 기준을 확인한다.",
        "수혈 팩 라벨을 수혈기록지에 붙이고 수혈번호와 일자를 확인해 스캔한다.",
        "수혈 시작, 15분 후, 종료 차팅과 V/S 메모를 입력한다.",
        "I/O에 blood 종류와 실제 용량을 입력한다.",
        "수혈 filter는 2팩까지 사용 기준을 확인한다.",
        "수혈이 잘 안 들어가면 blood pumping 장착 여부를 확인한다.",
        "PC에서 A-PLT로 변경 시 진검실 확인 후 처방 변경을 Noti한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "혈액제제 종류와 투여",
          "headers": [
            "종류",
            "적응증",
            "보관/온도",
            "투여",
            "기대효과"
          ],
          "rows": [
            [
              "RBC",
              "Hb 감소",
              "냉장",
              "1.5-3hr",
              "Hb 약 1g/dL 상승"
            ],
            [
              "PC",
              "PLT 감소",
              "실온",
              "Full drop",
              "PLT 약 5K/mm³ 상승"
            ],
            [
              "A-PLT",
              "PLT 감소",
              "실온",
              "Full drop",
              "PLT 약 30K/mm³ 상승"
            ],
            [
              "FFP",
              "PT/INR 이상",
              "냉장",
              "1-2hr",
              "INR 개선"
            ],
            [
              "Cryo",
              "Fibrinogen 감소",
              "냉장",
              "Full drop",
              "1팩당 fibrinogen 약 10mg/dL 상승"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "수혈",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "TRANSFER030",
      "category": "입퇴원·전원·사망",
      "title": "입퇴원/전동/전원/사망 간호 상세",
      "aliases": [
        "가퇴원",
        "전동간호기록",
        "전동",
        "전원",
        "전실",
        "G/W",
        "병동",
        "퇴원",
        "사망",
        "이동서식",
        "보호자 면담",
        "병실료",
        "병실정보",
        "6043",
        "6050",
        "이송콜",
        "산소탱크",
        "자가약",
        "전동기록지",
        "I/O 마감",
        "A-line 제거",
        "EVD clamp",
        "SDD clamp"
      ],
      "urgency": "urgent",
      "summary": "가퇴원, 전동/전실, 병동 이동, 퇴원, 보호자 면담, 이동서식 관련 실무 절차.",
      "indications": [],
      "preparation": [],
      "steps": [
        "가퇴원은 정규시간 외 응급 원무과 결제 후 정규시간 재심사/환불 절차를 안내한다.",
        "전동간호기록은 가는 부서가 작성하고 받을 때도 작성한다.",
        "전동 병동 확인 후 몇인실 희망, 비용, 상주 인원을 보호자에게 설명한다.",
        "병동에 인계 연락 후 전동간호기록지, 환자이동안내서, 전실 간호기록을 작성한다.",
        "짐, 약, 산소탱크, nebulizer kit 등을 챙기고 I/O를 마감한다.",
        "전실 10분 전 이송을 부르고 모니터 등 제거 준비를 한다.",
        "병동 전동 시 A-line 제거, Foley/수액 clamp, 모니터링 제거를 확인한다.",
        "EVD, SDD 등 관은 clamp 후 올려놓고 종이 플라스타로 고정한다.",
        "전실 결정 시 보호자에게 시간과 병실을 안내한다.",
        "이동 서식에는 라벨을 붙이고 이동지를 크게 쓴다.",
        "퇴원처방은 익일까지 액팅/DC 처리, 검사 삭제, 퇴원결정, 심사 완료, 수납 후 퇴원 순서로 확인한다.",
        "퇴원 시 A-line, IV, Foley 및 부착기구 제거와 퇴원 차팅을 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "입퇴원·전원·사망",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "ICUINFO030",
      "category": "원내정보/ICU 숙지",
      "title": "ICU 숙지사항: 면회, 외부전화, 약국, 이송, Noti, E-cart",
      "aliases": [
        "ICU 숙지사항",
        "면회",
        "임종면회",
        "외부전화",
        "9 누르고",
        "약국",
        "비번 6220",
        "냉장고 1234",
        "이송팀",
        "Noti",
        "당직의",
        "병원장",
        "ER CT 4시간",
        "E-cart 봉인라벨",
        "봉인라벨 No",
        "점검대장"
      ],
      "urgency": "routine",
      "summary": "ICU에서 자주 필요한 면회, 전화, 약국, 이송, Noti, E-cart 봉인라벨 관련 정보.",
      "indications": [],
      "preparation": [],
      "steps": [
        "면회 시간은 11:00-11:30이며 평일/주말/공휴일 기준을 확인한다.",
        "임종면회는 짧게 진행한다.",
        "동의서와 물품 준비, 대상자 상태 설명, 주치의 면담 안내를 확인한다.",
        "외부 전화는 9를 누른 뒤 번호를 누른다.",
        "약국은 1층이며 2인이 가고 열쇠와 비밀번호 6220, 냉장고 1234를 확인한다.",
        "검사 이송 시 이송팀을 부르고 line, monitor 제거 및 검사 전후 간호기록을 남긴다.",
        "Noti는 내과 → 당직의 → 병원장, 내과 제외는 당직 → 병원장 기준을 확인한다.",
        "ER 환자는 CT 4시간 후 F/U 여부를 확인한다.",
        "E-cart 봉인라벨 제거 시 봉인라벨 No.를 점검대장에 작성한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "원내정보/ICU 숙지",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "CPR030",
      "category": "응급상황/CPR",
      "title": "CPR 실무: Lucas, I-gel, Ambu, 기록",
      "aliases": [
        "CPR 실무",
        "루카스",
        "Lucas",
        "i-gel",
        "igel",
        "Ambu",
        "6초마다",
        "ROSC",
        "2분마다 맥박",
        "3-5분 에피",
        "비본",
        "N/S",
        "CPR 모니터링 기록지",
        "J 사용약물",
        "flow 기록",
        "code blue"
      ],
      "urgency": "emergency",
      "summary": "CPR 시 Lucas 시작시간, i-gel, Ambu, rhythm/pulse check, 약물, 기록 포인트.",
      "indications": [],
      "preparation": [],
      "steps": [
        "CPR 시작 시 Lucas 시작시간을 기록한다.",
        "체중/상황에 맞는 i-gel size를 확인하고 삽입을 준비한다.",
        "Ambu는 6초마다 ventilation을 기준으로 시행한다.",
        "2분마다 맥박과 rhythm을 확인한다.",
        "3-5분마다 epinephrine 투여 기준을 확인하고 비본, N/S 사용을 기록한다.",
        "ROSC 후 ventilator 연결 여부를 확인한다.",
        "Flow대로 기록하고 사용한 약물/물품을 메모한다.",
        "CPR 모니터링 기록지에 사용한 약물과 J를 기록한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [],
      "tags": [
        "응급상황/CPR",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "IMG030",
      "category": "검사·시술/영상검사",
      "title": "CT/MRI 조영제 검사와 주요 영상검사 준비",
      "aliases": [
        "CT 조영제",
        "MRI 조영제",
        "3way",
        "N/S hydration",
        "조영제 검사",
        "Coronary Angio CT",
        "NTG",
        "베타록",
        "Brain MRI non enhance",
        "Brain MRI enhance",
        "Brain CT",
        "Head Neck Angio CT",
        "DSA",
        "PTA",
        "TCD",
        "TFCA",
        "TRCA",
        "metformin",
        "메트포르민",
        "Rt 18G",
        "Lt 18G",
        "Lt 20G",
        "NPO",
        "MRI permission"
      ],
      "urgency": "routine",
      "summary": "CT/MRI 조영제 주입, line 준비, hydration, metformin 중지, 주요 영상검사별 준비사항.",
      "indications": [],
      "preparation": [],
      "steps": [
        "CT 조영제는 소독 후 3-way에 연결된 line을 기계에 연결하고 N/S 먼저 주입해 부종/불편감을 확인한다.",
        "MRI 조영제는 자석 제거 후 입실하고 프리필드 syringe를 3-way에 연결해 주입 후 N/S 관류한다.",
        "CT/MRI enhance 전 N/S 500ml와 Rt 18G를 준비하고 검사 전 250ml, 검사 후 250ml hydration을 고려한다.",
        "조영제 검사는 동의서, 신장기능, metformin 복용 여부를 확인한다.",
        "Metformin은 조영제 전일 및 투약 후 48시간 복용 금지 기준을 확인한다.",
        "Coronary Angio CT는 CT 5분 전 NTG 설하 투여, 베타록 지참 여부를 확인한다.",
        "MRI 촬영 시 sandbag 등 자석성 물품을 제거한다.",
        "검사별 line 위치, 금식 여부, 동의서 여부를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "주요 영상검사 준비사항",
          "headers": [
            "검사",
            "준비"
          ],
          "rows": [
            [
              "Coronary Angio CT",
              "CT 5분 전 NTG, 베타록 지참, 조영제 line"
            ],
            [
              "Brain MRI non-enhance",
              "검사설명서"
            ],
            [
              "Brain MRI enhance",
              "MRI 설명서, 조영제 동의서, permission, line, NS 500, 금식 X"
            ],
            [
              "Brain CT non-enhance",
              "준비사항 없음"
            ],
            [
              "Head Neck Angio CT",
              "Lt 18G, metformin 중지 확인, hydration"
            ],
            [
              "DSA",
              "Lt 18G, NS 500, 동의서, 금식 X"
            ],
            [
              "PTA",
              "NPO, PICC 조영제 사용 가능"
            ],
            [
              "TCD",
              "준비사항 없음, 보통 4-5일 f/u"
            ],
            [
              "TFCA/TRCA",
              "Lt 20G, NPO X"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "검사·시술/영상검사",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "DRESS030",
      "category": "Dressing",
      "title": "Dressing 소독제와 상처별 소독",
      "aliases": [
        "Dressing 소독",
        "소독제",
        "생리식염수",
        "베타딘",
        "클로르헥시딘",
        "알코올",
        "과산화수소",
        "일반 상처",
        "감염된 상처",
        "수술 후 상처",
        "욕창",
        "PCD",
        "장루",
        "SDD dx",
        "EVD bag 소독",
        "테가덤 CHG",
        "oozing",
        "거즈",
        "필름 7일",
        "픽스 2일"
      ],
      "urgency": "routine",
      "summary": "소독제 특징, 일반/감염/수술 후/욕창 상처 dressing, PCD, 장루, SDD, EVD bag 소독.",
      "indications": [],
      "preparation": [],
      "steps": [
        "일반 상처는 N/S로 부드럽게 세척하고 과다한 삼출물을 제거한 뒤 dressing한다.",
        "감염된 상처는 포비돈 요오드 또는 클로르헥시딘 사용 여부를 확인하고 필요 시 항생제 연고를 적용한다.",
        "수술 후 상처는 실밥 제거 전후 포비돈 요오드 사용, 감염징후를 확인한다.",
        "욕창은 N/S 또는 hydrogel을 사용하고 괴사조직 필요 시 의료진 보고 후 습윤 dressing을 고려한다.",
        "일반 dressing은 D-set에 hex swab, gauze/fix 또는 Tegaderm을 준비한다.",
        "Oozing 있으면 gauze, 없으면 Tegaderm을 기준으로 확인한다.",
        "Initial 시 oozing 있으면 교체한다.",
        "소독 후 gauze/fix는 2일, film은 7일 기준을 확인한다.",
        "A-line, C-line, CTD, PCD, PEG는 film dressing 적용 여부를 주의한다.",
        "Dressing 교체 시 d/t를 기록한다.",
        "PCD는 배액량을 짜고 alcohol swab으로 닦는다.",
        "장루는 N/S 세척 후 보호판을 장루보다 2-3mm 여유 있게 잘라 부착한다.",
        "EVD bag은 멸균장갑 착용 후 betadine으로 소독하고 거즈로 싸서 고무줄로 고정한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "소독제 특징과 사용 예시",
          "headers": [
            "소독제",
            "특징",
            "사용 예시"
          ],
          "rows": [
            [
              "생리식염수",
              "세포 자극 적음",
              "일반 상처 세척"
            ],
            [
              "베타딘",
              "광범위 항균",
              "감염 위험 상처, 수술 전 소독"
            ],
            [
              "클로르헥시딘",
              "강력한 소독, 피부 친화적",
              "카테터 삽입 부위, 중심정맥관 소독"
            ],
            [
              "알코올",
              "빠른 살균, 휘발성",
              "주사부위 피부 소독, 개방성 상처 금지"
            ],
            [
              "과산화수소",
              "기포 발생으로 이물질 제거",
              "괴사조직 제거, 지속 사용 금지"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "Dressing",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "SURG030",
      "category": "수술간호",
      "title": "수술/시술 전후 간호와 Pre-op 확인",
      "aliases": [
        "수술 전후 간호",
        "Pre Op",
        "preop",
        "시술 전 확인",
        "angio",
        "permission",
        "표식확인서",
        "PA 124",
        "수술 전 확인표",
        "OR 연락",
        "OP risk",
        "PCA 동의서",
        "전신마취 동의서",
        "수술동의서",
        "수술파일",
        "Pre OP Fluid",
        "foley 남성",
        "Post OP 처방"
      ],
      "urgency": "routine",
      "summary": "수술/시술 전 permission, 표식확인서, 동의서, pre-op 확인표, fluid, post-op 처방 확인.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Permission과 표식확인서를 확인하고 없으면 PA 124번 방에 확인한다.",
        "처방을 보며 수술/시술 전 확인표를 작성한다.",
        "OR 연락이 오면 수술실 체크 후 확인표를 출력해 내린다.",
        "OP 전 협진과 OP risk, pre/post lab, F/U 처방을 확인한다.",
        "수술 계획에서 일정을 확인한다.",
        "수술/시술 전 확인은 전날 Night가 작성하는 기준을 확인한다.",
        "PCA, 전신마취, 수술동의서, 고위험 스페셜 동의서를 확인한다.",
        "동의서 스캔 후 수술/시술 전 확인표와 함께 파일에 넣고 라벨을 붙여 인계한다.",
        "Pre OP fluid, 혈액 TF prep, post OP 처방과 검사/fluid를 미리 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [],
      "images": [
        {
          "src": "bin0005.png",
          "alt": "수술 전후 간호 참고 표",
          "caption": "수술 전후 간호 참고 표"
        }
      ],
      "tags": [
        "수술간호",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "CRRT030",
      "category": "CRRT",
      "title": "CRRT I/O, Return, Kit change, 처방, 차팅 상세",
      "aliases": [
        "CRRT 상세",
        "CRRT I/O",
        "CRRT return",
        "CRRT retrun",
        "Blood return",
        "혈액재주입",
        "Balance",
        "치료종료",
        "kit change",
        "Multifiltrate pro kit",
        "HOF 600",
        "멀티빅",
        "후탄",
        "prefilter 압력",
        "TMP",
        "BFR",
        "clot",
        "UF",
        "N/S 500",
        "NS 1L",
        "KCL",
        "포스텐",
        "CRRT cath",
        "conti cath",
        "CRRT 차팅"
      ],
      "urgency": "urgent",
      "summary": "CRRT I/O 마감, return, kit change, 처방/재료, catheter 행위료, 차팅까지 상세 정리.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Kit 교체 전 CRRT I/O를 끊고 balance 진행 시간을 duty I/O 시간으로 확인한다.",
        "치료 중단 후 N/S 500ml를 access line 3-way에 연결하고 3-way 방향을 돌린다.",
        "혈액 재주입을 시행하고 혈액 감지 여부를 확인한 뒤 환자를 분리한다.",
        "Return 전 I/O를 확인하고 BP가 낮으면 UF 낮추기 여부를 확인한다.",
        "CRRT filter가 300후반-400초반이면 교체 가능성을 확인한다.",
        "Kit 연결 시 line을 정리하면서 진행한다.",
        "Mix 용액 액팅 시간은 기록 시간과 맞춘다.",
        "CRRT I/O는 정각에 끊는다.",
        "I/O 계산은 들어가는 main infusion, side, 이전 I/O, target을 반영해 계산한다.",
        "Catheter 문제가 의심되면 regurge, pushing, 더 밀어 넣기 여부를 확인한다.",
        "BFR 120 이하부터 clot 가능성이 높아짐을 확인한다.",
        "후탄 priming: N/S 1L + 후탄 40mg, syringe 5DW 50ml + 후탄 10A mix 기준을 확인한다.",
        "Kit setting 시 heating sensor, heparin syringe sensor를 확인한다.",
        "하단 TMP는 return 압력 포트와 effluent bag 부분을 확인한다.",
        "Return 후 kit 제거 전 전원을 끄지 않고, kit 모두 제거 후 전원을 끈다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "CRRT Return 순서",
          "headers": [
            "순서",
            "내용"
          ],
          "rows": [
            [
              "1",
              "Blood return: NS 500 access line 3-way에 연결 후 full drop"
            ],
            [
              "2",
              "치료종료 → 혈액재주입 → 확인"
            ],
            [
              "3",
              "Balance 확인 및 적용시간 입력"
            ],
            [
              "4",
              "NS 500은 5분 이내 들어갈 수 있어 앞에서 대기"
            ],
            [
              "5",
              "Nacl 감지 또는 적당히 return 되면 clamp 후 종료"
            ],
            [
              "6",
              "환자 disconnect"
            ],
            [
              "7",
              "Kit 제거"
            ],
            [
              "8",
              "전원 끄기"
            ]
          ]
        },
        {
          "title": "CRRT Kit change",
          "headers": [
            "순서",
            "내용"
          ],
          "rows": [
            [
              "1",
              "오류 예방 위해 5분 뒤 전원 켜기"
            ],
            [
              "2",
              "치료 유지 → 기능테스트 100% 후 OK"
            ],
            [
              "3",
              "Pre 빨간색 / Post 파란색 연결"
            ],
            [
              "4",
              "Rinse / UF rinse 100% 이후"
            ],
            [
              "5",
              "환자 연결"
            ],
            [
              "6",
              "처방: CRRT kit + NS500 + NS1L 확인"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "CRRT",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "NSPROC030",
      "category": "검사·시술/신경외과",
      "title": "Burr hole, EVD/SDD, Coil embolization, Tracheostomy",
      "aliases": [
        "burr hole",
        "버홀",
        "EVD",
        "SDD",
        "ICP",
        "IICP",
        "CSF",
        "뇌척수액",
        "Coil embolization",
        "coil 전",
        "coil 후",
        "TR band",
        "Radial",
        "Tracheostomy",
        "기관절개관",
        "기관절개술",
        "PA 124",
        "전신마취동의서",
        "수술 전 처치표",
        "Anti prep"
      ],
      "urgency": "routine",
      "summary": "Burr hole 수술 후 EVD/SDD 관리, coil embolization 전후, tracheostomy 준비.",
      "indications": [],
      "preparation": [],
      "steps": [
        "Burr hole OP 후 return 시간, 1/2/6시간 F/U를 확인한다.",
        "SDD는 natural drainage 기준으로 낮게 위치를 확인한다.",
        "EVD 정상 CSF는 무색이며 시간당 15-20ml 생성 기준을 확인한다.",
        "EVD가 시간당 100ml 이상이면 출혈 가능성을 보고한다.",
        "EVD는 보통 tragus 기준 상방 0-15cm setting을 확인한다.",
        "배액백은 용량의 2/3 도달 시 비운다.",
        "정상 ICP는 5-15mmHg, IICP는 20mmHg 이상 기준을 확인한다.",
        "Coil embolization 전 수술 전 처치표, Anti prep(AST 확인), angio실 인계를 확인한다.",
        "Coil embolization 후 radial은 6시간 뒤 제거, 제거 후 superpore dressing, 다음날 아침 open을 확인한다.",
        "Tracheostomy는 consult와 PA 동의서, 기관절개관 동의서, 전신마취동의서, 기관절개관 크기별 준비, NPO를 확인한다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "실제 처치·투약은 담당의 지시와 병원 최신 프로토콜을 우선합니다."
      ],
      "related": [],
      "tables": [
        {
          "title": "신경외과 주요 수치",
          "headers": [
            "항목",
            "기준"
          ],
          "rows": [
            [
              "EVD 정상 CSF 생성",
              "15-20ml/hr"
            ],
            [
              "EVD 배액 과다",
              "100ml/hr 이상 시 출혈 가능성"
            ],
            [
              "EVD setting",
              "Tragus 기준 상방 0-15cm"
            ],
            [
              "정상 ICP",
              "5-15mmHg"
            ],
            [
              "IICP",
              "20mmHg 이상"
            ]
          ]
        }
      ],
      "images": [],
      "tags": [
        "검사·시술/신경외과",
        "v26_uploaded_manual_added",
        "manual_20260614"
      ],
      "review": {
        "status": "v26_uploaded_manual_added",
        "rule": "사용자가 업로드한 업무 매뉴얼 내용을 검색 DB에 추가"
      },
      "source_refs": [
        "업로드 파일: 매뉴얼 (수정)2026-06-14 184940(2).hwp"
      ]
    },
    {
      "id": "UPD43_CPR_____LUCAS_E_CART",
      "category": "응급상황",
      "title": "CPR 초기 대응 / Lucas / E-cart",
      "aliases": [
        "CPR 초기 대응 / Lucas / E-cart",
        "CPR",
        "초기",
        "대응",
        "Lucas",
        "E-cart",
        "코드",
        "6114",
        "루카스",
        "제세동기"
      ],
      "urgency": "emergency",
      "summary": "1. CPR",
      "indications": [],
      "preparation": [],
      "steps": [
        "1. CPR",
        ": 발견 즉시 흉부압박 (루카스 시작) -> 6114 CPR방송 ->DNR 여부확인",
        "> 보호자 ,주치의 call -> Lucas ,E-cart, 제세동기",
        "epi 4분당 1번 ,비본 ,N/S 연결",
        "ambu 6초 1번 (I-gel or intubation 시)",
        "> ROSC 되면 Vent 연결",
        "> CPR 모니터링 기록지 작성"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "응급상황",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_INTUBATION",
      "category": "응급상황",
      "title": "Intubation 준비물 / 약물 / 동의서",
      "aliases": [
        "Intubation 준비물 / 약물 / 동의서",
        "Intubation",
        "준비물",
        "약물",
        "동의서",
        "기관내삽관",
        "삽관",
        "Endo tube",
        "Video laryngoscope",
        "etomidate",
        "vecuronium"
      ],
      "urgency": "emergency",
      "summary": "2. Intubation",
      "indications": [],
      "preparation": [],
      "steps": [
        "2. Intubation",
        "준비 : Video laryngoscope Mac 3,4 / Endo tube (6.5 7.0 7.5 )",
        "멸균증류수 1L ,air way , syrnge 10 cc",
        "> Ventilator setting",
        "약물 : etomidate 10mg ,20mg ->마취제",
        "vecuonium 1mg ,4mg ->근육이완제",
        "행위료 : tracheal intubation (기관 내 삽관술)",
        "동의서 : 인공호흡기 치료 동의서 ,기관 내 삽관 시술 동의서",
        "(단, NIV mask 는 인공호흡기 치료 동의서만 )"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "응급상황",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_ABGA___A_LINE",
      "category": "검사 / 검체",
      "title": "ABGA 채혈 / A-line 목적",
      "aliases": [
        "ABGA 채혈 / A-line 목적",
        "ABGA",
        "채혈",
        "A-line",
        "목적",
        "동맥혈",
        "arterial line",
        "Radial artery"
      ],
      "urgency": "urgent",
      "summary": "7. ABGA 채혈",
      "indications": [],
      "preparation": [],
      "steps": [
        "7. ABGA 채혈",
        "A-line의 정의 및 목적",
        ": A-line은 동맥에 카테터를 삽입하여 침습적으로 혈압을 지속적으로 측정하고,",
        "반복적인 동맥혈 가스 분석 (ABGA)을 시행하기 위한 장치",
        "주요 목적 : 실시간 혈압 측정 (특히 MAP), 혈역학적 변화의 즉각적인 파악,",
        "잦은 ABGA 채혈로 인한 반복 천자 방지",
        "삽입 부위 : Radial artery(주로 가장 많이 하는 부위), femoral artery,",
        "brachial artery, dorsal artery",
        "준비물 : A-line catheter(angio 20G, 22G), A-line kit, A-line monitor cable,",
        "pressure pump bag, 수액, iv multifix, 트랜스듀서"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "검사 / 검체",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_A_LINE_ZEROING",
      "category": "순환 / 모니터링",
      "title": "A-line zeroing / 파형 확인",
      "aliases": [
        "A-line zeroing / 파형 확인",
        "A-line",
        "zeroing",
        "파형",
        "확인",
        "A-line zeroing",
        "overdamping",
        "underdamping",
        "MAP"
      ],
      "urgency": "urgent",
      "summary": "8. A-line zeroing",
      "indications": [],
      "preparation": [],
      "steps": [
        "8. A-line zeroing",
        "zeroing 절차",
        "1. 트랜스듀서를 기준점: 환자의 심장 높이(4번째 늑간- 액와중심선)에 위치",
        "2. 트랜스 듀서에 연결된 A-line kit 3-way를 위 방향으로 조정한 후 모니터에서",
        "zero 버튼 클릭 -> zero completed 확인",
        "3. 트랜스 듀서에 연결된 A-line kit 3way 방향을 오른쪽으로 조정함.",
        "A-line 파형",
        "Dicrotic notch 중복절흔: 심실압이 대동맥보다 낮아질 때 대동맥 판막이",
        "닫히면서 생김.",
        "Overdamping: 트랜스듀서 피그테일 당겼다 놓으면 비스듬한 사각형 파형 나타남,",
        "기준선 위아래 진동 거의 없음. 실제보다 수축기 낮게/ 이완기 높게 측정",
        "오버댐핑 발생 이유: 프레셔 백 압력 낮을 때, 연결된 선 꼬이거나 막힘",
        "under damping: 피그테일 당겼다 놓으면 기준선 위아래 수많은 진동 발생,",
        "실제보다 수축기 높게/이완기 낮게 측정, 발생 이유: 연결선 길이가 길 때,",
        "관이 딱딱한 경우",
        "Mean arterial pressure (MAP) 평균 동맥압 => 심장 주기 동안의 평균 압력",
        "으로 관상동맥 순환 및 조직 관류를 위한 최소한의 유지압력-MAP= 1/3SBP+ 2/3DBP,",
        "정상: 70mmHg 유지 파형 정상인데 수치가 이상한 경우 트랜스듀서 위치 변화, Zeroing,",
        "환자 체위 변화 여부"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "순환 / 모니터링",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_CVP",
      "category": "순환 / 모니터링",
      "title": "CVP 측정 / 정상범위 / 주의사항",
      "aliases": [
        "CVP 측정 / 정상범위 / 주의사항",
        "CVP",
        "측정",
        "정상범위",
        "주의사항",
        "중심정맥압",
        "Central venous pressure",
        "우심방"
      ],
      "urgency": "routine",
      "summary": "9. CVP(중심정맥압, Central venous pressure)",
      "indications": [],
      "preparation": [],
      "steps": [
        "9. CVP(중심정맥압, Central venous pressure)",
        "CVP는 우심방과 상대정맥 (SVC) 내 혈압을 측정하는 값으로, 혈액량 상태,",
        "심장 기능, 정맥 환류를 평가하는 중요한 지표",
        "CVP 정상 및 의미",
        "정상: CVP: 2-8mmHg, 5-10cmH2O",
        "CVP 높을 때:　>8mmHg => 심부전, 과수액, 폐동맥 고혈압, 혈액량 과다",
        "CVP 낮을 때: <2mmHg => 탈수, 저혈량 쇼크, 출혈, 정맥 확장",
        "CVP 측정 방법",
        "1. 중심정맥관을 통한 측정",
        "● 쇄골하정맥, 경정맥, 대퇴정맥을 통해 삽입된 중심정맥관 사용",
        "● CVP 루멘에 압력 변환기 연결 후 측정",
        "● 환자를 반좌위로 유지 후 측정",
        "2. 수위법",
        "● 중심정맥관에 수위계 연결 후 정맥압 측정",
        "● 기준점: 우심방과 같은 높이 (4번째 늑간-액와 중심선)",
        "CVP 측정 시 주의 사항",
        "호흡 주기에 따라 CVP 변동 가능 -> 호기 말에서 측정",
        "측정 전 혈전 있는지 확인 후 saline flush로 제거",
        "정확한 기준점 유지하여 측정 (기준점: 4번째 늑간-액와 중심선)",
        "CVP에 영향을 주는 요인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "순환 / 모니터링",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43___AST_1_5000",
      "category": "약물 / 수액 / 마약",
      "title": "항생제 AST 1:5000 희석",
      "aliases": [
        "항생제 AST 1:5000 희석",
        "항생제",
        "AST",
        "5000",
        "희석",
        "항생제 AST",
        "1:5000",
        "ID",
        "skin test"
      ],
      "urgency": "urgent",
      "summary": "19. 항생제 AST",
      "indications": [],
      "preparation": [],
      "steps": [
        "19. 항생제 AST",
        "AST",
        "1:5000",
        "200mcg:1cc 만드는 게 목표",
        "500mg",
        "Ns 2.5ml mix",
        "1g",
        "Ns 5mg mix",
        "2g",
        "Ns 10mg mix",
        "4.5g",
        "Ns 20mg mix",
        "￨ 0.1재고 ns0.9 mix 1ml 만들고",
        "￨ 다시 0.1재고 ns0.9 mix 1ml 만들어 0.1ml만 ID",
        "￨ 10분 후 결과 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "약물 / 수액 / 마약",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [
        {
          "title": "AST 희석 목표",
          "headers": [
            "원약 용량",
            "1차 희석",
            "최종 목표"
          ],
          "rows": [
            [
              "500mg",
              "N/S 2.5mL mix",
              "1:5000, 200mcg/1mL 목표"
            ],
            [
              "1g",
              "N/S 5mL mix",
              "재희석 후 0.1mL ID"
            ],
            [
              "2g",
              "N/S 10mL mix",
              "10분 후 결과 확인"
            ],
            [
              "4.5g",
              "N/S 20mL mix",
              "병원 프로토콜 우선"
            ]
          ]
        }
      ],
      "images": []
    },
    {
      "id": "UPD43_______AMIODARONE_ADENOS",
      "category": "약물 / 수액 / 마약",
      "title": "고위험 약물 / 항부정맥제 Amiodarone Adenosine",
      "aliases": [
        "고위험 약물 / 항부정맥제 Amiodarone Adenosine",
        "고위험",
        "약물",
        "항부정맥제",
        "Amiodarone",
        "Adenosine",
        "고위험약물",
        "코다론",
        "SVT",
        "PSVT",
        "cardioversion"
      ],
      "urgency": "urgent",
      "summary": "20. 고위험 약물",
      "indications": [],
      "preparation": [],
      "steps": [
        "20. 고위험 약물",
        "<항부정맥제>",
        "Bisoprolol 콩코르",
        "Dapaglifozin : 심부전 치료제(다파신, 다파브로, 자디앙",
        "Amiodarone(코다론)",
        "l 항부정맥제(칼륨 채널 차단제)",
        "l Class 3 항부정맥제",
        "l 심장의 전기 신호를 조절하여 심박수와 리듬을 정상화하는 역할",
        "l 광범위한 부정맥 치료 가능(심실성, 심방성 부정맥 모두 효과)",
        "l VT, VF, AF, A-flutter에 모두 사용됨.",
        "l 긴 반감기(수일~수개월)로 인해 약물 축적가능 -> 부작용 모니터링 필수",
        "l 칼륨 채널 차단 -> 활동전위 연장 -> 심박수 조절",
        "l 나트륨&칼슘 채널 차단 효과 -> 심장 수축 조절",
        "l 베타 블로커 작용도 일부 포함 ->심박수 감소효과",
        "loading",
        "코다론 150mg(1@)+5% DW 100ml -> 10분간",
        "Maintenance",
        "코다론 900mg(6@)+5%DW 500ml",
        "처음 6시간 : 33ml/hr(1mg/min)",
        "이후 : 16.5cc/hr(0.5mg/min)",
        "*이후 장기 유지가 필요시 PO 처방",
        "금기",
        "l NS mix(침전물 생김. 단독 line)",
        "l 저혈압, 서맥, QT long",
        "Adenosine",
        "l 발작성 상심실성 빈맥(SVT,PSVT 150~250bmp)",
        "l 방실 결절에 작용해 전기 전도 늦춤, 방실결정 통한 재유입 차단",
        "l 짧은 반감기(10초)로 신속 주입",
        "1차",
        "3mg(peripheral : 6mg) 신속 IV",
        "2차",
        "1차 후 반응 없을 시(상심실성 빈맥 1~2분 내 소실X) 6mg(peripheral : 12mg) 신속 IV",
        "3차",
        "2차 후 반응 없을 시, 2차와 동일 용량",
        "정상동리듬으로 돌아오지 않는 경우",
        "Synchronized cardioversion 준비",
        "금기",
        "l COPD, 저혈압, QT long"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "약물 / 수액 / 마약",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_DNR",
      "category": "입퇴원 / 전동 / 전원 / 사망",
      "title": "DNR 서류 작성 / 연명의료",
      "aliases": [
        "DNR 서류 작성 / 연명의료",
        "DNR",
        "서류",
        "작성",
        "연명의료",
        "사전연명조사지",
        "9호",
        "10호",
        "11호",
        "13호"
      ],
      "urgency": "routine",
      "summary": "23. DNR",
      "indications": [],
      "preparation": [],
      "steps": [
        "23. DNR",
        "DNR 서류 작성",
        "￨ 사전연명조사지 작성 여부 따라 필요 서류 다름",
        "￨ 조사지(+): 9, 10, 13호",
        "￨ 조사지(-): 9, 11, 13호",
        "￨ 9, 10, 11, 13호 파일은 ICU main 컴퓨터 파일에 있음",
        "￨ 이행 어디까지 하는지 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "입퇴원 / 전동 / 전원 / 사망",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43",
      "category": "수혈 / 혈액",
      "title": "수혈 절차 / 혈액제제 종류 / 응고인자",
      "aliases": [
        "수혈 절차 / 혈액제제 종류 / 응고인자",
        "수혈",
        "절차",
        "혈액제제",
        "종류",
        "응고인자",
        "RBC",
        "FFP",
        "PC",
        "APLT",
        "Cryo",
        "ABO",
        "Cross matching",
        "혈액은행"
      ],
      "urgency": "urgent",
      "summary": "24. 수혈",
      "indications": [],
      "preparation": [],
      "steps": [
        "24. 수혈",
        "혈액 수령 방법",
        "수혈 절차",
        "1. 수혈동의서(입원마다",
        "2. 수혈처방",
        "3. 혈액요청서(EMR) 뽑아서 내리기",
        "수혈예정일:처방일",
        "채혈일: cross matching 검체 내린 날",
        "4. ABO,Rh Typing(EDTA 1,하루 한 번)",
        "5. Antibody : 비정상적 항체 확인(",
        "Plain 1, 하루 한 번)",
        "6. Cross- matching(72시간마다) : 응집반응 평가",
        "7. 6135(혈액은행, 진검)전화해서 준비되면 타달라고 하기",
        "종류",
        "적응증",
        "온도",
        "투여",
        "기대",
        "RBC",
        "Hg",
        "냉장",
        "1.5-3hr",
        "1g/dL­",
        "PC",
        "PLT",
        "실온",
        "Full drop",
        "5Kmm­",
        "APLT",
        "PLT",
        "실온",
        "Full drop",
        "30Kmm­",
        "FFP",
        "PT INR­",
        "냉장",
        "1-2hr",
        "INR 2~10%￸",
        "Cryo",
        "Fibrinogen",
        "냉장",
        "Full drop",
        "1팩당",
        "10mg/dl­",
        "*FFP : 혈소판 제외 모든 clotting factor 보충",
        "*PC,APLT는 아이스백 필요없음.",
        "적혈구 제외 모든 물질 포함=혈장",
        "응고인자(피브리노겐, 프로트롬빈), 알부민, 면역 글로불린",
        "*Cryoprecipitate : 동결침전제제",
        "FFP를 centrifuge해서 얻어짐.",
        "피브리노겐 중심의 응고인자 보충에 사용",
        "I/O 40",
        "*RBC 수혈시 칼슘농도 monitor : RBC 안 sodium citrate(항응고물질)있어 출혈 위험성이 커짐. 칼슘이 sodium citrate와 binding하여 출혈 위험성￸",
        "*APLT : apheresis platelet =Single donor plateltet",
        "APLT 1=PC 6~8개",
        "<응고인자>",
        "l PT(prothrombin time) : 와파린 복용시 prolong",
        "l PT INR : 정상범위(0.8~1.3) 와파린 복용(2~3)",
        "l APTT(activated partial thromboplastin time)",
        "정산범위(22.7~44.3)헤파린 복용 환자의 경우 정상의 1.5-2.5배",
        "l Fibrinogen : 감소시 출혈가능성­",
        "l D-dimer : 섬유소 분해산물로 혈액속에서 발견되는 경우는 혈전이 있다 사라진 것을 의미. 폐색전증 환자나 파종성 혈관 내 응고장애를 가진 환자에게 발생 정상(0~0.61)"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수혈 / 혈액",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [
        {
          "title": "혈액제제 종류 요약",
          "headers": [
            "종류",
            "적응증",
            "보관/온도",
            "투여",
            "기대효과"
          ],
          "rows": [
            [
              "RBC",
              "Hb 저하",
              "냉장",
              "1.5~3hr",
              "Hb 약 1g/dL 상승"
            ],
            [
              "PC",
              "PLT 저하",
              "실온",
              "Full drop",
              "PLT 약 5K 상승"
            ],
            [
              "APLT",
              "PLT 저하",
              "실온",
              "Full drop",
              "PLT 약 30K 상승"
            ],
            [
              "FFP",
              "PT/INR 상승",
              "냉장",
              "1~2hr",
              "INR 보정"
            ],
            [
              "Cryo",
              "Fibrinogen 보충",
              "냉장",
              "Full drop",
              "Fibrinogen 상승"
            ]
          ]
        }
      ],
      "images": []
    },
    {
      "id": "UPD43_LAB_BOTTLE_SPUTUM_CX_URINE_CX",
      "category": "검사 / 검체",
      "title": "Lab bottle 종류와 채혈 순서 / 검체 채취",
      "aliases": [
        "Lab bottle / Sputum Cx / Urine Cx / RAT",
        "Lab",
        "bottle",
        "Sputum",
        "Cx",
        "Urine",
        "RAT",
        "Lab bottle",
        "채혈순서",
        "Sputum Cx",
        "Urine Cx",
        "검체",
        "Lab bottle 종류",
        "채혈 순서",
        "검체 bottle",
        "검체 채취",
        "외주검사",
        "차광검체"
      ],
      "urgency": "routine",
      "summary": "25. Lab bottle",
      "indications": [],
      "preparation": [],
      "steps": [
        "25. Lab bottle",
        "채혈 순서",
        "차광검체 라벨 2개 (검체 bottle, 은박지 포장 위)",
        "엽산 검사 차광 (3~4cc)",
        "외주검사",
        "Sputum Cx",
        "– 준비물 : 서지컬 글러브, 검체용기, 에어웨이, N/S, 카테터",
        "서지컬 글로브 오픈해서 에어웨이, N/S, 검체용기 까놓고 장갑착용",
        "Suction이랑 검체용기 연결 (투명 – Suction이랑, 갈색 – 카테터랑)",
        "N/S 관류 후 Airway 장착 후 Suction, N/S 관류까지",
        "컨타 주의 , 컨타된 손, 멸균 손 정해서 수행",
        "□ Urine Cx",
        "dressing set(베타딘, 에탄올 솜, 20cc 주사기) 검체 용기​, 멸균 장갑",
        "1. 멸균장갑 착용하고, 포트를 포비딘소독솜으로 소독",
        "2. 2분간 자연건조를 시킨 뒤 주사기를 검체채취 포트에 삽입하여",
        "10cc 정도 소변을 채취​",
        "3. 채취한 소변은 바로 urine culture 전용 용기에 담기",
        "RAT (호흡기 19종 PCR(학 메디칼 빨간뚜껑 통)",
        "얇은 면봉 코, 굵은 거 입에 직선으로 넣어서 채취 후 검체 통에 부러뜨려서 넣기) -> RAT 검사 후 ‘현장 검사 결과 관리’ 가서 결과 입력"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "검사 / 검체",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [
        {
          "title": "검체 채취 핵심",
          "headers": [
            "항목",
            "핵심 포인트"
          ],
          "rows": [
            [
              "채혈 순서",
              "병원 검체 bottle 기준과 검사실 지침 우선"
            ],
            [
              "차광검체",
              "검체 bottle과 은박지 포장 위 라벨 2개 부착"
            ],
            [
              "Sputum Cx",
              "멸균 손/오염 손 구분, suction 연결 방향 확인"
            ],
            [
              "Urine Cx",
              "포트 소독 후 자연건조, 10cc 정도 채취"
            ],
            [
              "RAT",
              "호흡기 PCR 검체 채취 후 현장 검사 결과 관리 입력"
            ]
          ]
        }
      ],
      "images": []
    },
    {
      "id": "UPD43_BLOOD_CULTURE",
      "category": "검사 / 검체",
      "title": "Blood culture 채혈 절차",
      "aliases": [
        "Blood culture 채혈 절차",
        "Blood",
        "culture",
        "채혈",
        "절차",
        "Blood culture",
        "blood Cx",
        "혈액배양",
        "혐기",
        "호기",
        "녹십자"
      ],
      "urgency": "urgent",
      "summary": "26. Blood culture",
      "indications": [],
      "preparation": [],
      "steps": [
        "26. Blood culture",
        "Blood Culture (녹십자 사이트에서 결과 확인 가능)",
        "처방 보조 – 채혈접수업무 – B11, B12 발행 후 재발행",
        "혐기 1 호기 1 혐기 2 호기 2로 라벨 붙이기 (호기(파랑), 혐기(갈색))",
        "준비물 : Dressing set 2개",
        ": 각각 (헥스왑 / 에탄올 볼 4개씩) 20cc 1개(니들 바꿔서) 토니켓, 글러브, 거즈 (소독 : 에탄올 – 헥스왑 (부위, 병 모두))",
        "1. 검사 설명(30분 간격으로 다른 부위에서 총 2회 채취 설명)",
        "2. blood Cx. bottle 플라스틱 뚜껑 벗기기, 토니켓 묶고 Vein 확인",
        "소독 전 손톱으로 눌러 vein 표시",
        "4. dressing set 열고 glove 착용",
        "5. 에탄올 볼 -> 헥스왑으로 Cx. bottle 입구 닦기(호기, 혐기 1쌍)",
        "채혈 부위도 에탄올 볼 -> 헥스왑으로 닦기",
        "6. 주사기 이용하여 16~20cc 채혈",
        "투석 환자의 경우 투석 팔 제외한 팔 한쪽과 다리",
        "유방암 수술 환자 - 수술 부위 제외 팔 다리",
        "수액 및 약물 주입 혈관 제외",
        "7. 토니켓 풀고 거즈와 테이프로 지혈",
        "8. 혐기-> 호기 순서로 반반씩 담기 (갈 -> 파)",
        "같은 부위에서 나갈 거면 30분 후에 다시 채혈",
        "blood, sputum culture는 슈터기 X 검체보관함에 넣기",
        "중심 정맥에서 채혈할 경우엔 충분히 regurge 후에 채혈함",
        "* chemoport, SVC, JVC 같은 중심정맥관을 가지고 있다면 lumen따라 : 균이 자라고 있다면 제거해야 하기 때문에 두 번째 채혈 시 같은 루멘에서 채혈하지 않기 (1루멘당 1쌍) 중심정맥관이 있다면 2쌍+중심정맥관1쌍이 처방"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "검사 / 검체",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_CRE_CPE_MRAB_VRE_MRSA",
      "category": "감염관리 / 검사",
      "title": "CRE / CPE / MRAB / VRE / MRSA 검사 및 격리",
      "aliases": [
        "CRE / CPE / MRAB / VRE / MRSA 검사 및 격리",
        "CRE",
        "CPE",
        "MRAB",
        "VRE",
        "MRSA",
        "검사",
        "격리",
        "CPO",
        "Rectal swab",
        "격리해지"
      ],
      "urgency": "routine",
      "summary": "27. CRE / CPE",
      "indications": [],
      "preparation": [],
      "steps": [
        "27. CRE / CPE",
        "CRE(파란 뚜겅 통), CPO(초록색) (Rectal swab)",
        "CAG & PCI 한 사람 CRE, CPO, RAT 안함",
        "Tip Cx CRE 검체용기(파란 뚜껑 통)로 나감.",
        "MRAB sputum",
        "3~5일마다 f/u",
        "3회 음성 시 격리해지",
        "CRE, VRE",
        "일주일마다 f/u",
        "3회 음성 시 격리해지",
        "MSSA, MRSA(nasal swab)",
        "f/u 안함.",
        "격리안함. 손씻기만 시행",
        "<의사 처방에 따라 진행>",
        "obs",
        "origin 찾기(ex.sputum cx)",
        "예방적 anti"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "감염관리 / 검사",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_DRESSING___SDD_EVD",
      "category": "Line / Drain / Dressing",
      "title": "Dressing / 소독제 / SDD·EVD 관 제거",
      "aliases": [
        "Dressing / 소독제 / SDD·EVD 관 제거",
        "Dressing",
        "소독제",
        "SDD",
        "EVD",
        "제거",
        "베타딘",
        "클로르헥시딘",
        "suture",
        "dressing set"
      ],
      "urgency": "routine",
      "summary": "31. Dressing",
      "indications": [],
      "preparation": [],
      "steps": [
        "31. Dressing",
        "삽관, 관 제거 시 - SDD, EVD 등 관 뺄 때",
        "S-set에 베타딘 스왑(볼에 베타딘 용액 묻혀서), 거즈, 베타폼, 나일론 2-0 넣고 레노픽스, EB, 장갑",
        "Suture(?point), dressing Charting 넣기",
        "소독제",
        "특징",
        "사용 예시",
        "생리식염수",
        "세포 자극 X",
        "일반 상처 세척",
        "베타딘",
        "광범위 항균",
        "감염 위험 상처, 수술 전 소독",
        "클로르헥시딘",
        "강력한 소독, 피부 친화적",
        "카테터 삽입 부위, 중심정맥관 소독",
        "알코올",
        "빠른 살균효과, 휘발성",
        "주사부위, 피부 소독 (개방성 상처엔 X)",
        "과산화수소",
        "기포 발생 -> 이물질 제거",
        "괴사조직 제거",
        "(지속 사용 X)",
        "□ 일반 상처 소독",
        "생리식염수로 부드럽게 세척",
        "과다한 삼출물 제거",
        "깨끗한 드레싱 적용",
        "□ 감염된 상처 소독",
        "포비돈 요오드 or 클로르헥시딘 사용",
        "배농 필요시 습윤 드레싱 적용",
        "감염 심하면 항생제 연고 도포",
        "□ 수술 후 상처 소독",
        "실밥 제거 전후 포비돈 요오드 사용",
        "절개 부위 감염 여부 확인 (발적, 열감, 삼출물)",
        "거즈 드레싱 유지",
        "□ 욕창 부위 소독",
        "생리식염수 또는 하이드로겔 사용 (피부보호)",
        "괴사 조직 제거 필요 시 소독 후 의료진 보고",
        "습윤 드레싱 적용",
        "□ 일반 Dressing",
        "일회용 D-set에 헥스왑 + 거즈(+픽스), 테가덤",
        "장갑 착용 후 헥스왑으로 부위 소독, 거즈+픽스나 테가덤 CHG",
        "oozing 있으면 거즈, 없으면 테가덤",
        "initial 시 oozing 있으면 무조건 교체",
        "소독 후 거즈, 픽스 (2일), 필름 7일",
        "A, C line, CTD, PCD, PEG 필름 드레싱 X",
        "dressing 교체 시 d/t 적어 차팅",
        "거즈 + CHG X. 상처 위 듀오덤",
        "A line 헥스틱, multifix dressing",
        "abrasion beta foam + eb?",
        "C-line Dressing : D-Set에 헥스왑 + 테가덤 장갑",
        "□ PCD(percutaneous Catheter Drainage)",
        "배액량 짜고 알코올 스왑으로 닦기",
        "Position 시 Kelly로 잠그기, 스키징, 밀킹 가능",
        "자연배액감시 : ACE VAC Clamping 안하고 side rail에 묶으면 됌",
        "PCD 대상자 fluid 갖고 올라오면 Lab 나갈 수도 (Coincal = UA검체통)",
        "□ 장루 Dressing",
        "N/S 적셔서 세척 후 장루 보호판 2-3mm 여유있게 잘라서 장루에 보호판 페이스트 발라서 붙이기",
        "– 보호판, 주머니 결합 – 주머니 끝 잠그기",
        "□ SDD dx(coban dx(탄력 붕대)) : 드레싱 카트에서 길게 자르고 끝부분 돌려 묶고 바라클라바 쓰듯이 목까지 덮고 이목구비 나올 수 있게 찢고 목에 메디폼 적용",
        "□ EVD bag 소독 – 일회용 D-set에 거즈, 포비돈 스왑, 멸균장갑",
        "장갑끼기 전 베타딘 스왑 까고 D-set 열고 거즈 벗기고 장갑 끼고 베타딘으로 소독 -> 용기에 받고 닫고 소독 후에 거즈 싸기 + 고무줄로 고정",
        "32.원내 주요 전화번호"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "Line / Drain / Dressing",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼(260618)"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼(260618)"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_2",
      "category": "호흡 / Ventilator",
      "title": "기관절개관 목적 / 적용 / 합병증",
      "aliases": [
        "기관절개관 목적 / 적용 / 합병증",
        "기관절개관",
        "목적",
        "적용",
        "합병증",
        "Tracheostomy",
        "T-tube",
        "cuff pressure",
        "상부기도폐쇄",
        "호흡부전"
      ],
      "urgency": "urgent",
      "summary": "기관절개관(Tracheosomy)",
      "indications": [],
      "preparation": [],
      "steps": [
        "기관절개관(Tracheosomy)",
        "1. 목적",
        "1) Upper airway abstruction 상부 기도 폐쇄",
        "2) Respiratory failure 호흡 부전",
        "3) Disorders of diaphragm 횡경막의 기능 부전- 폐의 수축 팽창 방해",
        "4) Severe burns 심한 화상",
        "5) Anaphylactic reaction 아나필락틱 반응- 기도가 좁아지고 숨이 안 쉬어짐",
        "2. 기관절개과 삽입과 제거 과정",
        "Single cannula -> Double cannula -> 기관절개관 마개 -> speaker valve -> 절개관제거",
        "★ 기관절개관을 전체 제거하고 나면 대게 24-48시간 이내에 hole이 저절로 닫힘",
        "3. 합병증",
        "1) 기관절개관 폐쇄, 출혈",
        "2) 육아조직 형성, 기관지 협착",
        ">기관절개관 장기적 사용 or cuff pressure가 과하게 들어가 있는 경우",
        "3) 기관식도루, 기관연화증, 기관무명동맥루",
        "4) 폐렴, 기흉, 폐기종, 후두신경 손상, 감염 등",
        "★ 기관절개관의 적용",
        "1) 튜브는 2번째 3번째 Tracheal ring 사이 정중앙에 삽입",
        "2) 환자마다 개별적으로 적용하는 압력의 범위가 다르지만 일반적으로 20-27mmHg",
        "과한 압력으로 적용하는 경우 기관지 협착에 의한 괴사가 발생할 수 있음",
        "적은 압력으로 적용하는 경우, 인공호흡에 의해 전달되는 공기의 양과 압력이 제대로 전달되지 않을 수 있음",
        "3) 일반적으로 외관 교체는 1-3개월 간격으로 시행(내관은 daily 또는 많이 오염되었을 때)",
        "4) 튜브 주변을 소독할 경우 소독액 사용이 흡인 위험성이 있어 생리식염수 사용",
        "5) 침상 머리를 올려서 흡인의 위험을 최소화",
        "특징",
        "내관의 유무",
        "(분비물 양에 따라)",
        "Single cannula",
        "◆ 분비물이 많을 때 사용",
        "Double cannula",
        "◆ 수술 후 분비물이 감소할 때 사용",
        "◆ 외관과 내관으로 분리가 가능하여 외관은 그대로",
        "두고 내관만 빼내서 세척 및 소독 후 다시 사용",
        "◆ 비용과 관리면에서 효율적",
        "Cuff 유무",
        "(상기도 호흡에 따라)",
        "cuff 유",
        "◆ 인공호흡이 필요한 환자에게 적용",
        "◆ 수술 후 출혈과 이물질의 흡인을 방지",
        "cuff 무",
        "◆ 인공호흡이 필요 없는 환자에게 적용",
        "Fenetrated 유무",
        "(상기도 호흡에 따라)",
        "Fenetrated",
        "◆ Tube 뿐만 아니라 상기도, 하기도를 통한 호흡 가능",
        "Unfenetrated",
        "◆ Tube를 통한 호흡에만 전적으로 의지",
        "Tube의 윗부분에 구멍이 없는 관과 구멍이 있는 관의 차이는 기존의 환자 비강, 구강 Airway를 사용하느냐 아니냐에 차이다",
        "1) cuff 있는",
        "Mera flex",
        "2) cuff 없는",
        "Teflon, koken",
        "2. 이중내관 기관절개관 (Double Cannula)",
        "1) cuff 있는",
        "Mera sofit, Tracoe REF 302",
        "2) cuff 없는",
        "Tracoe twist, koken",
        "3. 기관절개관 마개",
        "◆ 기관절개관 구멍을 마개로 닫아서 환자의 코와 입으로 숨을 쉬는 self respiration을",
        "하도록 함",
        "(반드시 구멍이 있는 fenestrated tube(위쪽에 구멍이 있는) 사용!!)",
        "4. 기관절개관 발성 보조기구(Speech valve)",
        "◆ 가래가 많아 흡인이 필요한 경우, 마개를 제거 한 후 내관을 통해 suction 가능",
        "◆ 마개를 유지한 채 구강섭취도 가능함",
        "※ 번외",
        "1. portex tube(폴텍스 튜브)",
        "1) cuffed tube(single cannula)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개 직후 및 인공호흡기 치료, 흡인 가능서이 높은 환자에게 사용한다.",
        "(3) 인공호흡기 연결 시 공기가 새지 않고 흡인을"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "호흡 / Ventilator",
        "v43_uploaded_manual",
        "기관절개관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "기관절개관"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_____SINGLE_DOUBLE_CUFF_FE",
      "category": "호흡 / Ventilator",
      "title": "기관절개관 종류 / Single·Double / Cuff / Fenestrated",
      "aliases": [
        "기관절개관 종류 / Single·Double / Cuff / Fenestrated",
        "기관절개관",
        "종류",
        "Single",
        "Double",
        "Cuff",
        "Fenestrated",
        "Single cannula",
        "Double cannula",
        "Unfenestrated",
        "내관",
        "외관"
      ],
      "urgency": "routine",
      "summary": "특징",
      "indications": [],
      "preparation": [],
      "steps": [
        "특징",
        "내관의 유무",
        "(분비물 양에 따라)",
        "Single cannula",
        "◆ 분비물이 많을 때 사용",
        "Double cannula",
        "◆ 수술 후 분비물이 감소할 때 사용",
        "◆ 외관과 내관으로 분리가 가능하여 외관은 그대로",
        "두고 내관만 빼내서 세척 및 소독 후 다시 사용",
        "◆ 비용과 관리면에서 효율적",
        "Cuff 유무",
        "(상기도 호흡에 따라)",
        "cuff 유",
        "◆ 인공호흡이 필요한 환자에게 적용",
        "◆ 수술 후 출혈과 이물질의 흡인을 방지",
        "cuff 무",
        "◆ 인공호흡이 필요 없는 환자에게 적용",
        "Fenetrated 유무",
        "(상기도 호흡에 따라)",
        "Fenetrated",
        "◆ Tube 뿐만 아니라 상기도, 하기도를 통한 호흡 가능",
        "Unfenetrated",
        "◆ Tube를 통한 호흡에만 전적으로 의지",
        "Tube의 윗부분에 구멍이 없는 관과 구멍이 있는 관의 차이는 기존의 환자 비강, 구강 Airway를 사용하느냐 아니냐에 차이다",
        "1) cuff 있는",
        "Mera flex",
        "2) cuff 없는",
        "Teflon, koken"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "호흡 / Ventilator",
        "v43_uploaded_manual",
        "기관절개관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "기관절개관"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_PORTEX_TRACOE_KOKEN_TEFLON_MON",
      "category": "호흡 / Ventilator",
      "title": "Portex / Tracoe / Koken / Teflon / Montgomery tube",
      "aliases": [
        "Portex / Tracoe / Koken / Teflon / Montgomery tube",
        "Portex",
        "Tracoe",
        "Koken",
        "Teflon",
        "Montgomery",
        "tube",
        "Vocalaid",
        "Adjustable",
        "Speech valve"
      ],
      "urgency": "routine",
      "summary": "1. portex tube(폴텍스 튜브)",
      "indications": [],
      "preparation": [],
      "steps": [
        "1. portex tube(폴텍스 튜브)",
        "1) cuffed tube(single cannula)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개 직후 및 인공호흡기 치료, 흡인 가능서이 높은 환자에게 사용한다.",
        "(3) 인공호흡기 연결 시 공기가 새지 않고 흡인을 방지한다",
        "(4) 큰 내경을 가지고 있어 공기의 흐름이 원활하다",
        "2) cuffed tube(double cannula, Portex blue line ultra tube)",
        "(1) 이중 내강 튜브(외관+내관)+cuff O",
        "(2) cuff가 부드러워 기관벽에 자극을 주지 않고 손상을 최소화 한다.",
        "(3) 기 외에는 single cannula cuffed t-tube와 비슷하다",
        "3) Vocalaid t-tube(suctionaid vocalaid)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개 직후 사용한다",
        "(3) 주변 분비물을 흡인할 수 있는 catheter가 있다.",
        "(4) 분비물이 많은 환자에게 적용하기에 용이하다",
        "(5) 오랜기간 사용하는 환자의 경우 적합하다.",
        "4) Adjustable t-tube (portex blue line t-tube)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개술 시행 직후 초기에 사용한다",
        "(3) 길이를 조절하고 잠금장치로 잠그는 것이 가능하다. = flange(플랜지)가 있다.",
        "(4) 후두부종, 비만 등 tube 길이 조절이 필요한 경우에 사용한다.",
        "2. Uncuffed tube",
        "(1) 단일 내강 튜브(내관x)+ cuff X",
        "(2) 주로 소아에게 사용된다.",
        "(3) 이외 후두절제술 환자, 환자 스스로 호흡 가능한 경우, 발성 연습을 필요로 하는 경우, 기관절개관 제거 계획중인 환자들에게 적용한다.",
        "(4) 케뉼라 제거 기간동안 사용된다.",
        "★케뉼라 제거: 분미물의 관리, 기도 보호, 환기 및 산소 유지가 되어 기관절개관 발관 준비가 끝났을 경우, 케뉼라 제거를 시행한다.",
        "3. Tracoe tube(트라코 튜브)",
        "1) Twist cuffed",
        "(1) 이중 내관 튜브(외관+내관)+ cuff O",
        "(2) neck plate 부분이 유동성이 있어(유연하여) 장기간 착용하기 편하나 고가이다.",
        "2) Twist un-cuffed",
        "(1) 단일 내강 튜브(내관x)+cuff X",
        "3) Tracoe 소아용",
        "4. Koken tube(코켄 튜브)",
        "(1) 이중내강 튜브(외관+내관) + cuff X",
        "(2) 분비물 양이 감소하면 사용한다.",
        "(3) 붙어있는 분비물 제거가 용이하고 피부 자극이 적다.",
        "(4) corking을 하는 환자의 경우 corking을 시도시 구멍을 막으면 목소리를 낼 수 있다.",
        "(5) 인공호흡기 사용시에는 koken tube 사용이 불가하므로, weaning 단계에서 사용한다.",
        "5. Teflon(테프론 튜브)",
        "(1) 이중 내강 튜브(외관+내관) + cuff X",
        "(2) T-tube 제거 전 연습용으로 사용 가능하다.",
        "자발호흡이 가능해야한다.",
        "(3) speech valve(=cap)",
        "앞을 막으면 대화가 가능하다.",
        "speech valve 사용시 내관을 꼭 제거해야한다.",
        "6. Montgomery tube(몽고메리 튜브)=T자형 기관 유지관",
        "1) 실리콘 기도 스텐트 삽입술",
        "2) 적응증",
        "(1) 기도 협착에 의한 호흡곤란 및 반복적인 혈담",
        "(2) 기도 협착에 의한 심한 기침 및 반복적 폐렴 발생",
        "(3) 기도 협착에 의한 심한 천명음",
        ">기도 협착 환자들에게 주로 사용하는 방법",
        "3) 후두기관 수술 후 기관 스텐트와 기도 겸용으로 사용되는 장치이다.",
        "7. Fenestrated cuffed tube(구멍이 뚫린 기관절개관)",
        "1) 구멍이 뚫린 외관+내관+덮개",
        "2) 하나는 커프로 연결되어 있고, 다른하나는 커프 위 구멍으로 연결되어 있다.",
        "튜브 뒤쪽 벽에 구멍이 있어 공기가 상기도로 통하게 된다.",
        "튜브 입구를 막으면 성대를 진동시켜 목소리가 나올 수 있다.",
        "3) cuff가 있는 경우에는 cuff를 수축시켜 호기가 성대로 올라와 말을 할 수 있게 한다.",
        "4) 내관을 제거하고 덮개로 구멍을 막는다",
        "성대를 진동시켜 목소리가 나오며, 분비물 또한 스스로 배액이 가능하다.",
        "호흡곤란이 있는지 사정이 필요하다.",
        "> 호흡곤란시 덮개를 제거하고 내관 삽입하여 바로 cuff를 팽창시킨다.",
        "5) 내관 삽입 상태에서는 일반적인 t-tube같이 사용한다.",
        "6) 의사소통(자발적 발성), 기관절개관 제거를 위한 단계에서는 fenestrated tube로 변경하는 것이 좋다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "호흡 / Ventilator",
        "v43_uploaded_manual",
        "기관절개관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "기관절개관"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS",
      "category": "수술 / 시술",
      "title": "NS 수술명 약어 정리",
      "aliases": [
        "NS 수술명 약어 정리",
        "NS",
        "수술명",
        "약어",
        "정리",
        "신경외과",
        "PEID",
        "PELD",
        "ALIF",
        "PLIF",
        "ACDF"
      ],
      "urgency": "routine",
      "summary": "◈ NS 수술명 ◈",
      "indications": [],
      "preparation": [],
      "steps": [
        "◈ NS 수술명 ◈",
        "PEID (Percutaneous interlaminar disectomy) : 경피적 내시경하 추궁간판 제거술",
        "PELD (Percutaneous lumbar disectomy) : 경피적 내시경하 추간판 제거술",
        "MD(Microdisectomy): 추간판 제거술",
        "MF(Medial Fenestration): 내측부 신경관 감압술",
        "LF(Lateral foraminotomy): 외측부 신경관 감압술",
        "ALIF(Anterior lumbar interbody fusion): 전방경유 요추 추체간 융합술",
        "PLIF(Posterior lateral fusion): 후방경유 요추 추체간 융합술",
        "TLIF(Transverse lumbar interbody fusion): 횡단 요추 추체간 융합술",
        "PLF(Posterior lateral fusion): 후-외측 융합술",
        "PPF(Percutaneous posterior Fixation) : 경피적 후방 고정술",
        "ACDF(Anterior cervical disectomy fusion): 전방경유 경추 추간판 제거술 및 융합술",
        "TDR(Total disc replacement): 전 인공 디스크 치환술",
        "PVA(Percutaneous vertebral augmentation): 경피적 척추체 강화술",
        "PVP(Percutaneous vertebral plasty): 경피적 척추체 성형술",
        "Kyphoplasty : 풍선을 이용한 척추체 성형술",
        "Foraminotomy : 추간공 절개술",
        "Laminectomy : 척추후궁 절제술",
        "Laminoplasty : 척추후궁 성형술",
        "Corpectomy : 척추체 치환술",
        "NPT(Neuroplasty) =PEN (Percutaneous neuroplasty) :신경성형술",
        "B-PEN(Balloning percutaneous neuroplasty) :풍선을 이용한 경피적 신경성형술",
        "Neucleoplasty : 수핵성형술",
        "Annulonerucleoplasty : 고중파 수핵성형술",
        "TELA (Trans-Foraminal Epiduroscopic Laser Annuloplasty) :추간공내시경레이저시술"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 약어"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_2",
      "category": "신경계",
      "title": "NS 진단/질환 약어 정리",
      "aliases": [
        "NS 진단/질환 약어 정리",
        "NS",
        "진단",
        "질환",
        "약어",
        "정리",
        "NS 약어",
        "HNP",
        "ICH",
        "IVH",
        "CVA",
        "EDH",
        "SDH",
        "SAH"
      ],
      "urgency": "routine",
      "summary": "◈ NS 약어 ◈",
      "indications": [],
      "preparation": [],
      "steps": [
        "◈ NS 약어 ◈",
        "• HNP(Herniated nucleus pulposus): 수핵 탈출증",
        "• HIVD(Herniated intervertebral disc): 추간판 탈출증",
        "• HLD(Herniated lumbar disc): 요추간판 탈출증",
        "• ICH(Intracranial hemorrhage): 두 개내 출혈",
        "• IVH(Intraventricular hemorrhage): 뇌실내 출혈",
        "• CVA(Cerebrovascular accident): 뇌졸중",
        "• EDH(Epidural hemorrhage): 경막외 출혈",
        "• FBSS(Failed back surgery syndrome) 척추 수술실패 증후군",
        "• LDK(Lumbar degeneration kyphosis) 요추퇴행성 척추 후만증",
        "• OPPL(Ossification of posterior longitudinal ligament) 후종인대골화증",
        "• SDH(Subdural hematoma): 경막하 혈종",
        "• SAH(Subarachnoid hemorrhage): 지주막하 출혈"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "신경계",
        "v43_uploaded_manual",
        "NS OS 약어"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_OS",
      "category": "수술 / 시술",
      "title": "OS 수술명 약어 정리",
      "aliases": [
        "OS 수술명 약어 정리",
        "OS",
        "수술명",
        "약어",
        "정리",
        "정형외과",
        "TKRA",
        "THRA",
        "ORIF",
        "CRIF",
        "ACL",
        "PCL"
      ],
      "urgency": "routine",
      "summary": "◈ OS 수술명 ◈",
      "indications": [],
      "preparation": [],
      "steps": [
        "◈ OS 수술명 ◈",
        "A/S(Arthroscopy): 관절경",
        "A/S Knee(Arthroscopy knee): 무릎 관절경",
        "A/S Shoulder(Arthroscopy shoulder): 어깨 관절경",
        "Acrominoplasty : 견봉 성형술",
        "AMD(Arthroscopic microdisectomy): 관절경을 이용한 수핵제거술",
        "ACL(Anterior cruciate ligament) recon / repair: 전방십자인대 재건술 / 복원술",
        "LCL(Lateral collateral ligament) recon / repair: 측부외측십자인대 재건술 / 복원술",
        "MCL(Medial collateral ligament) recon / repair: 내측측부인대 재건술 / 복원술",
        "PCL(Posterior cruciate ligament) recon / repair: 후방십자인대 재건술 / 복원술",
        "CTR(Carpal tunnel release): 수근관 감압술",
        "CR IF(Closed reduction Internal fixation): 폐쇄정복 & 내부고정",
        "OR IF(Open reduction Internal fixation): 개방정복 & 내부고정",
        "Debridement: 변연절제술, 괴사조직 제거술",
        "E & B(Excision and Biopsy): 절개와 생검",
        "I & D(Incision and Drainage): 절개와 배액",
        "Synovectomy: 활액막 절제술",
        "Bursectomy: 활액낭 절제술",
        "Condroplasty: 연골 성형술",
        "Menisectomy: 반월상 연골 절제술",
        "TKRA(Total knee replacement arthroplasty): 전슬관절 대치술",
        "THRA(Total hip replacement arthroplasty): 전고관절 대치술",
        "TARA(Total ankle replacement arthroplasty): 발목관절 전치환술",
        "TSRA(Total shoulder replacement arthroplasty): 어깨관절 전치환술",
        "Bipolar: 고관절 반 인공관절 치환술",
        "AIBG(Autogenous iliac bone graft): 자가장골이식",
        "HTO(High tibial osteotomy ) :경골근위부절골술",
        "Bankart repair : 관절와순파열 복원술 (어깨)",
        "SLAP(Superior labrum from anterior to posteior)repair :상부관절와순파열 복원술(어깨)"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 약어"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_OS_2",
      "category": "수술 / 시술",
      "title": "OS 진단/질환 약어 정리",
      "aliases": [
        "OS 진단/질환 약어 정리",
        "OS",
        "진단",
        "질환",
        "약어",
        "정리",
        "OS 약어",
        "Fx",
        "OA",
        "RA",
        "ROM",
        "CPM",
        "AVN",
        "CTS"
      ],
      "urgency": "routine",
      "summary": "◈ OS 약어 ◈",
      "indications": [],
      "preparation": [],
      "steps": [
        "◈ OS 약어 ◈",
        "• A.C(Acromion Claviclar): 견봉쇄골",
        "• AFO(Ankle foot orthosis): 발목 고정술",
        "• AVN(Avascular necrosis): 무혈성 괴사증",
        "• CHD(Congenital hip dislocation): 선천성 고관절 탈구",
        "• CHS(Compression hip screw): 압박고 나사",
        "• CPM(Continuous passive movement): 지속적 수동운동",
        "• CTS(Carpal tunnel syndrome): 수근관 증후군",
        "• DJD(degenerative joint disease 퇴행성 관절질환",
        "• DDH(Development dislocation of hip): 발달성 고관절 탈구",
        "• DRX 견인치료",
        "• E/F(External fixation): 외부 고정장치",
        "• ECRB(extension carpi radialis brevis) 단요수근 신전",
        "• ESWT(Extracorporeal shock wave therapy) 체외충격파 치료",
        "• Fx.(Fracture): 골절",
        "• hemarthritis 다발성 관절염",
        "• LCPD(Leg calve perthes's disease): 대퇴골두 허혈성 괴사증",
        "• LM(Lateral meniscus) 측부 반월상 연골",
        "• MM(Medial meniscus) 내측 반월상 연골",
        "• MDS(Myelo dysplastic syndrome): 골수 이형성 증후군",
        "• OA(Osteoarthritis): 골관절염",
        "• OM(Osteomylitis): 골수염",
        "• QSE(Quadriceps setting muscle exercise): 대퇴사두근 연습",
        "• ROM(Range of motion): 운동범위",
        "• RA(Rheumatoid arthritis): 류마티스 관절염",
        "• RC(Rotator cuff): 회전근개",
        "• SBC(Simple bone cyst): 단순 골낭종",
        "• SLAP(superior labrum anterior posterior lesion) 상순 전후 병변",
        "• SLRT(Straight leg raising test): 하지거상검사",
        "• spondylolisthesis 척추 전방 전위증",
        "• Spondylosis deformans 변형성 척추증",
        "• spondylarthritis 척추 관절염",
        "• spondylolysis 척추 분리증",
        "• TFCC(triangular fibroric cartilagenous complex) 삼각 섬유연골 복합체",
        "• TPI(Tender Point Inject) 근막 동통 유발적 주사"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 약어"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_BLOCK",
      "category": "수술 / 시술",
      "title": "Block 종류 약어 정리",
      "aliases": [
        "Block 종류 약어 정리",
        "Block",
        "종류",
        "약어",
        "정리",
        "신경차단술",
        "CSEB",
        "MBB",
        "LSEB",
        "STEB",
        "Root block"
      ],
      "urgency": "routine",
      "summary": "◈ Blcok 종류 ◈",
      "indications": [],
      "preparation": [],
      "steps": [
        "◈ Blcok 종류 ◈",
        "CSEB(cervical spine epidural block) 경추경막 외강 신경차단술",
        "MBB(medial branch block): 내측 신경 가지 차단술",
        "LSEB(Lumbar spine epidural block) 요추경막 외강 신경차단술",
        "STEB(selective transforaminal epidural block) 선택적 경추간 공경막외 신경차단술",
        "Root block: 신경근 차단술",
        "Trigeminal nerve block: 삼차신경 차단술",
        "Peripheral nerve block: 말초신경 차단술",
        "caudal block: 미추 신경공 차단술",
        "LFNB(Lateral femoral cutaneous nerve block)",
        "SGB(Sympathetic ganglion block)",
        "ATNB(Auricular temporal nerve block)",
        "SONB(Superior orbital nerve block)",
        "IONB(Inferior orbital nerve block)",
        "STNB(Superior trochlear nerve block)",
        "SSNB(Supra scarpular nerve block)",
        "PTNB(Posterior tibial nerve block)",
        "KIB(Knee injection block)",
        "SIB(Shoulder injection block)",
        "Piriformis block 이상근 부위 신경차단술",
        "Prolotherapy 증식요법"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 약어"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS",
      "category": "수술 / 시술",
      "title": "NS / OS 공통 꼭 알아야 할 사항",
      "aliases": [
        "NS / OS 공통 꼭 알아야 할 사항",
        "NS",
        "OS",
        "공통",
        "알아야",
        "사항",
        "NS OS",
        "공통사항",
        "수술전 처치표",
        "OR",
        "anti",
        "injection 시간"
      ],
      "urgency": "routine",
      "summary": "< NS / OS 꼭 알아야 할 사항 >",
      "indications": [],
      "preparation": [],
      "steps": [
        "< NS / OS 꼭 알아야 할 사항 >",
        "NS 환자 주말 처방은 카톡에 주말 오더방(당직과장)에서 받으면 되고, OS는 전담(pop up에 뜨는)한테 받으면 됨",
        "외래 base 시술환자는 픽업 안받습니다. 시술전 처치표 필요 / 외래 간호기록지 차팅 / 내리기전 anti 주고 내리기",
        "NPT / PEN : ABR 2시간 NPO 4시간/ TBA : ABR 30분 NPO 4시간",
        "수술 가는 환자 꼭 바지 입혀보내기(ex 터진바지), 수술 갔다와서도 위아래 환자복 제대로 입히기",
        "수술전 처치표 작성시 완료 안된부분 형광펜으로 표시 후 완료 확인되면 수술방 내려주세요",
        "injection 시간 9am/3pm/9pm, anti는 6am/2pm,10pm",
        "포스테오, 인슐린 사용 시 하루 최대 WSCA 피하주사 fee 2개까지 가능",
        "RUEB402ICU - 단순초음파2 ICU 처방 fee",
        "(portable doppler, portable echo- 검사결과는 재진기록지로만 볼수있음. portable이라 검사결과에 안뜸)",
        "OR방 갈 때 dorsi set로 fluid 달고 가기 / 기저귀, 속옷, 네일, 보청기, 틀니 확인",
        "motor check 시 motor 0이라고 안함. foot drop으로 기록남기기",
        "op환자 BT 37.5 2일 이상 지속 시 RAT, PCR 나가기/ 38.0 이상 시 fever study 나가기",
        "post op v/s 1시간 뒤, 2시간 뒤. 6시간 뒤",
        "진료기록사본신청에서 진료확인서 = 수술기록지입니다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 알아야할 사항들"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 알아야할 사항들"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_H_VAC_JP_DRAIN",
      "category": "Line / Drain / Dressing",
      "title": "H-vac / JP drain 관리 기준",
      "aliases": [
        "H-vac / JP drain 관리 기준",
        "H-vac",
        "JP",
        "drain",
        "관리",
        "기준",
        "배액관",
        "tip culture",
        "MRI"
      ],
      "urgency": "routine",
      "summary": "< H-vac, JP >",
      "indications": [],
      "preparation": [],
      "steps": [
        "< H-vac, JP >",
        "OS1 -> H-vac(natural), JP(full)",
        "OS2 -> H-vac(full)",
        "OS3 -> H-vac(수술 당일 natural) POD#1 오전 회진 후 full",
        "OS7 -> H-vac(full)",
        "OS8 -> 퇴실 기준으로 1시간 H-vac clamping 이후 1/3 유지",
        "OS9 -> H-vac(full)",
        "OS Drain 양 많아도 보고 X / OS3 H-vac 500cc 이상 시 주치의 보고",
        "NS는 H/V full negative,",
        "NS jp Drain 50cc 이상시 주치의 보고, output 100cc 이상 시 CSF mix되는 지 확인",
        "(사진, headache, dizziness, fever, BP 확인하고 기록넣기)",
        "NS2 JP 빼고 MRI",
        "NS3 MRI 찍고 JP remove",
        "MRI H-vac 있으면 불가능",
        "H/V, JP remove 시 tip cx 처방 코드 : LZB4134 ordinary culture,",
        "Antibiotic sensitivity(Cath Tip)",
        "Gram stain(방법-tip 으로 변경) -->간호처방으로 가능, set처방 추가"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "Line / Drain / Dressing",
        "v43_uploaded_manual",
        "NS OS 알아야할 사항들"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 알아야할 사항들"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_OS_____DRESSING_DVT",
      "category": "수술 / 시술",
      "title": "OS 과별 특이사항 / Dressing / DVT / 보조기",
      "aliases": [
        "OS 과별 특이사항 / Dressing / DVT / 보조기",
        "OS",
        "과별",
        "특이사항",
        "Dressing",
        "DVT",
        "보조기",
        "정형외과",
        "H-vac",
        "DVT pump",
        "stocking",
        "hip brace"
      ],
      "urgency": "routine",
      "summary": "< OS >",
      "indications": [],
      "preparation": [],
      "steps": [
        "< OS >",
        "OS 8과는 전화로, OS1과는 톡으로 주말 아침 noty할거 있을 때.",
        "OS 1,8,9 POD#2일째 첫 Dx,H-vac 제거시까지 Dx 안함.H-vac 제거한날 Dx,EOD Dx",
        "OS 2,3,7 POD#2일째 첫 Dx후 EOD 시행",
        "OS 8) 에어매트리스 깔지말라해도 NS all 에어매트리스 깔기로!! 상관없음",
        "OS 전담이 동의서+ 그 외 카톡 퍼미션방",
        "OS 1과 OP day부터 크렉산 사용",
        "OS 1과 stocking 안함. DVT pump만 적용",
        "OS 1과 total hip, bipolar op환자 워커 + 모래주머니 수술계획표에 써놓기(보조기회사에 환자 직접 수납)",
        "OS spinal 마취 8시간 head down",
        "OS 7과는 splint가져오면 stocking X, DVT pump X"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 알아야할 사항들"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 알아야할 사항들"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_____JP_MRI_DRESSING_I_O",
      "category": "신경계",
      "title": "NS 과별 특이사항 / JP / MRI / Dressing / I/O",
      "aliases": [
        "NS 과별 특이사항 / JP / MRI / Dressing / I/O",
        "NS",
        "과별",
        "특이사항",
        "JP",
        "MRI",
        "Dressing",
        "신경외과",
        "EOD Dx",
        "PCA",
        "urine hourly"
      ],
      "urgency": "routine",
      "summary": "< NS >",
      "indications": [],
      "preparation": [],
      "steps": [
        "< NS >",
        "NS19 6pm전에 수술 나오면 담날 아침부터 s.o.w-점심 미음- 저녁 죽/",
        "6pm이후 나오면 담날 점심부터 s.o.w –저녁 미음 – 담날 아침 죽",
        "NS37 POD#1 brain ct f/u 6-7am 에 로비층에서 검사",
        "NS34 chest 8:30에 꼭 찍어주세요(portable) 영상의학과 협조요청(+)",
        "NS34 진단서 펠로우 과장님이 작성함",
        "NS는 배액관 지속시든 제거시든 EOD Dx입니다",
        "NS2 당일 최소 8시간 NPO, 때때로 다를 수 있음.....",
        "동의서 NS 22,25,26 원장님 직접, 전담 없음(서브만)",
        "NS2 J-P 제거 시 tip있는 에디슨 포셉 준비하고,s-s 얇은거 준비해야 합니다",
        "NS2 J-P 제거 후에 MRI 해야하고, 제거한 날에 꼭 f/u해야합니다",
        "NS2 minor op, 60세이하 환자는 stocking 적용안함",
        "spinal 마취시에는 욕창 고위험으로 안하고 정상군으로 해주세요",
        "Duty 별 U/O 250cc 미만일경우 urine houry 하세요",
        "(EMR 서식지에 hourly check하고 듀티마다 I/O에 total양만 적어주세요)",
        "op 후 보조기 착용 하는사람 (hip brace는 OS1과만! OS8과는 처방에다 적어놓는다함)",
        "보조기업체 010-9262-1310 미리 전날 연락해서 전날 보조기 제작 +",
        "비급여 설명받고 차팅꼭 남겨주세요",
        "Cervical op는 dvt, 스타킹 X",
        "OS,NS 7번처방은 OR 처방이므로 픽업x",
        "NS는 배액관 지속시든 제거시든 EOD Dx입니다",
        "PCA remove시 v/s 메모칸에 써주면 보기 편할것 같아요. 언제 뺐는지 알수있으니.시간.",
        "Dressing PA가 할때 nylon 또는 vicryl로 suture했는지,steri-strip 했는지,dressing 제품 뭘로 했는지 등",
        "기록이랑 카덱스에 남겨주세요. 추후 stitch out(보통 14일) 여부등 확인해야하니까",
        "입원당시 동의서는 전담쌤이 받고 입원 후는 우리가 동의서 받음.",
        "(주치의 아이디로 로그인해서 동의서 출력)동의서 주치의 사인으로 되어있어야 합니다",
        "post icu return 시 보호자분께 문자 보내기",
        "(윌스기념병원입니다. ㅇㅇㅇ 님 수술이 종료되어 집중치료실로 이동 예정입니다.)",
        "> 익스플로어 즐겨찾기에 smspia.com 이용하세요)",
        "general 마취) 베개,head up, leg elevation 가능",
        "혈액요청서-OP,진단명,수혈경험 여부, 채혈자(이름 일치하게)",
        "일반병동환자 필터시린지 사용해주세요 bouls 2개까지 급여(ex 덱사,로이솔), IM 사용갯수대로 비급여 필터시린지 처방입력(IM 사용시 비급여 설명 후 필터시린지 사용함 차팅 넣어주세요)-나이트가 개수 일괄입력",
        "마약) 분홍색 종이에 있던 것 사용했으면 분홍색 종이에 다시 넣은 후 간호라벨에 선 긋고, 이름 적어주세요",
        "major OP 모니터링 POD#1 아침 회진때까지.''모니터링 이제 안할게요~''하고 끝내기",
        "burrhole 1주미만은 tip Cx 안함. 1주 이상 유지하다 remove시에는 tip Cx 나갑니다",
        "증식치료(프롤러(주사제이름), 스크램블러 비급여 설명해야합니다.(비급여 동의서 우리가 받음)",
        "전신마취 수술하는 남자환자는 수술전에 면도하기 (벤트할때 불편하다함)",
        "고위험 약물 사용시 낙상 재사정 해야함(불변요인 제외))",
        "TFCA 남자는 쉐이빙 X, 여자는 쉐이빙 O, left arm 18G, 시술 전 처치 및 간호상태 확인 저장만 하고, 종이 X"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "신경계",
        "v43_uploaded_manual",
        "NS OS 알아야할 사항들"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 알아야할 사항들"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS___________LANTUS",
      "category": "수술 / 시술",
      "title": "NS/OS 수술 전 검사 기준 / 조영제 / Lantus",
      "aliases": [
        "NS/OS 수술 전 검사 기준 / 조영제 / Lantus",
        "NS",
        "OS",
        "수술",
        "검사",
        "기준",
        "조영제",
        "Lantus",
        "수술전 검사",
        "ABGA",
        "PFT",
        "BMD",
        "TCD",
        "Echo",
        "MR enhance",
        "CT enhance"
      ],
      "urgency": "routine",
      "summary": "PRBC 400(250), 320(200) FFP 400(150) 320(130) PC 400(50) 320(40)",
      "indications": [],
      "preparation": [],
      "steps": [
        "PRBC 400(250), 320(200) FFP 400(150) 320(130) PC 400(50) 320(40)",
        "세파제돈 1.0g AST:POSITIVE-->세파졸린 1.0g * 3번 처방",
        "Bun/ creatinine 높을 때-->세파졸린 2.0g * 2번 처방",
        "<70세 이상>",
        "ABGA/PFT/BMD(Fx 환자는 필수)",
        "<50세 이상>",
        "Carotid doppler(carotid MRI 로 대체가능), TCD",
        "<40세 이상>",
        "TCD(Brain MRI로 대체가능), Echo",
        "<30세 이상>",
        "SONO/상,하지 doppler",
        "<20세 이상>",
        "심전도/lab/ chest x-ray/CT/PWV/ 동적체(incision 수술은 제외)/DITI/",
        "통증역치/ sEMG(Fx 환자는 제외)",
        "근전도-50세 이상 및 spinal stenosis 환자, cervical op 환자",
        "TFT(필요시)",
        "갑상선 질환 기왕력 환자가 전신마취로 수술할 경우 반드시 TFT 검사 진행!!!",
        "75세 이상 인지장애 검사 설명후 신청",
        "MR(enhance)--> 0.1cc/kg 최대 7.5cc",
        "CT(enhance)--> 2mg/kg, 100ml(한도내)",
        "강직성 척추염--> 외주) HLA-B27 유전자 검사 동의서 내려야함",
        "항CCP항체(IgG)- 정밀면역검사",
        "<OS8 Foot drop시 살론투여방법>",
        "살론125,g qid(3일) 살론 6시간 간격으로 주세요",
        "살론125mg tid(1일)",
        "살론125mg bid(1일)",
        "살론 125mg qd(1일)",
        "<Lantus 조절법 >",
        "130 이상--> 2u증량",
        "180 이하--> 4u or 6u증량",
        "70 이하--> 4u or 6u감량",
        "BMD 기준: 2 level에서 제일 낮은 수치 or femur에서 neck 수치!",
        "프롤리아 프리드리시린지 6개월 마다: T score –2.5",
        "이베니티 1개월마다 총 12회 : T score –2.5,",
        "65세이상 여성, , 골다공성 골절 2개",
        "칼슘제재 및 골다공증 약 3~4개월 복용"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_MAJOR_OP_ALIF",
      "category": "수술 / 시술",
      "title": "NS Major OP ALIF 정규처방",
      "aliases": [
        "NS Major OP ALIF 정규처방",
        "NS",
        "Major",
        "OP",
        "ALIF",
        "정규처방",
        "NS major",
        "POD",
        "fusion"
      ],
      "urgency": "routine",
      "summary": "1. ALIF",
      "indications": [],
      "preparation": [],
      "steps": [
        "1. ALIF",
        "OP day",
        "POD #1~2",
        "POD #3",
        "POD#4-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "로이솔 1@ TID",
        "모틴1vial + NS100 BID",
        "크렉산40 sc*1(POD#2~)",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "경구약",
        "pre) 카발린 75mg",
        "아데만, 엑소페린, 파모티딘, 라시도필,",
        "마그밀 1T씩 BID",
        "POD#7~ T/S/O : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "POD#1 Chest PA",
        "POD#3",
        "> L-spine MRI",
        "> L-spine AP/Lat",
        "> vein doppler f/u",
        "POD#6",
        "L-spine AL/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "POST CBC,",
        "항혈전스타킹",
        "DVT PUMP, EKG,",
        "POD#1",
        "CBC, ESR, CRP",
        "electrolyte(Na&K&cl)",
        "UA",
        "POD#3",
        "CBC",
        "E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT Bun/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "▶ 당뇨환자일 경우 5DS1L,5DW1L 대신 NS 1L,",
        "멀티플렉스 1.1L + 휴물린알 20단위",
        "▶ Fever, ESR/CRP 상승, oozing 기타등등 환자 컨디션 따라 3세대 항생제 세프키존으로 변경될 수 있음",
        "▶ 40세 이상 POD #2~8 까지 크렉산주 40mg S.C 투여 (JP 제거후부터)",
        "40세 이상 수술전 Vit D 투여함",
        "▶ 크렉산 종료후 POD#9~15 아스피린 1T QD 7일간",
        "▶ 통증의 양상에 따라 아이알코돈, 마이폴, 뉴가바캡슐 (100mg/300mg), 트리마셋, 뮤로다제, 알프람,",
        "등등 변경 및 추가 가능",
        "▶ 전날 반드시 미음!!! // Gas out후 SOW-미음-죽",
        "▶ NS3) 2-1 콤비플렉스 페리주 1440 2-2 H/S 1O00",
        "AAP, 엑소페린, 파모티딘, 라시도필, 마그밀 1T씩 BID",
        "PCA 소진후 아이알 코돈 0.5->1T QID 추가",
        "POD#7 H/S/O, POD#8~10 T/S/O",
        "◈ NS(신경외과) 정규 처방 ◈"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_MAJOR_OP_PLIF_PTLIF_DLIF_PL",
      "category": "수술 / 시술",
      "title": "NS Major OP PLIF/PTLIF/DLIF/PLF 정규처방",
      "aliases": [
        "NS Major OP PLIF/PTLIF/DLIF/PLF 정규처방",
        "NS",
        "Major",
        "OP",
        "PLIF",
        "PTLIF",
        "DLIF",
        "PLF",
        "정규처방",
        "ITF",
        "corpectomy"
      ],
      "urgency": "routine",
      "summary": "2. PLIF,PTLIF,DLIF,PLF,ITF,corpectomy",
      "indications": [],
      "preparation": [],
      "steps": [
        "2. PLIF,PTLIF,DLIF,PLF,ITF,corpectomy",
        "OP day",
        "POD #1~2",
        "POD #3",
        "POD#4-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ BID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ TID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "(JP 양상 확인후)",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "경구약",
        "pre) 카발린 75mg",
        "아데만, 엑소페린, 파모티딘, 메디락에스, 마그밀 1T씩 BID",
        "POD#7~ T/S/O : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "POD#1 Chest PA",
        "POD#3",
        "> L-spine MRI",
        "> L-spine AP/Lat",
        "POD#6",
        "L-spine AL/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "POST CBC,",
        "항혈전스타킹",
        "DVT PUMP, EKG,",
        "POD#1",
        "CBC, ESR,CRP",
        "electrolyte(Na&K&cl)",
        "UA",
        "POD#3",
        "CBC",
        "E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT Bun/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "▶ 당뇨환자일 경우 5DS1L,5DW1L 대신 NS 1L",
        "멀티플렉스 1.1L + 휴물린알 20단위",
        "▶ Fever, ESR/CRP 상승, oozing 기타등등 환자 컨디션 따라 3세대 항생제 세프키존으로 변경될 수 있음",
        "▶ 40세 이상 POD #3~8 까지 크렉산주 40mg S.C 투여 (JP 제거후부터)",
        "▶ 크렉산 종료후 POD#9~15 아스피린 1T QD 7일간",
        "▶ 통증의 양상에 따라 아이알코돈, 마이폴, 뉴가바캡슐 (100mg/300mg), 트리마셋, 뮤로다제,",
        "알프람, 등등 변경 및 추가 가능",
        "▶ 18시 이전(아침부터) SOW-미음-죽 18시 이후(점심부터) 금식-SOW-미음",
        "▶ NS3) 트라미펜, 엑소페린, 파모티딘, 라시도필, 마그밀 1T씩 BID",
        "PCA 소진후 아이알 코돈 0.5->1T QID 추가 IRCD은 POD#7 이후 저니스타1T",
        "POD#7 H/S/O, POD#8~10 T/S/O",
        "▶ 60세 이상 허리 FUSION POD#2 V-D",
        "◈ NS(신경외과) 정규 처방 ◈",
        "Major OP"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_CERVICAL",
      "category": "신경계",
      "title": "NS Cervical 수술 정규처방 / 관찰 포인트",
      "aliases": [
        "NS Cervical 수술 정규처방 / 관찰 포인트",
        "NS",
        "Cervical",
        "수술",
        "정규처방",
        "관찰",
        "포인트",
        "ACDF",
        "TDR",
        "laminoplasty",
        "foraminotomy",
        "호흡장애",
        "carotid MRI"
      ],
      "urgency": "routine",
      "summary": "3. Cervical(laminoplasty, corpectomy, ACDF, Foraminotomy, TDR)",
      "indications": [],
      "preparation": [],
      "steps": [
        "3. Cervical(laminoplasty, corpectomy, ACDF, Foraminotomy, TDR)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ BID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ TID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "보트로파제 1@ TID",
        "세파제돈1.0g BID",
        "경구약",
        "A-K brace",
        "수술실내리기",
        "트리돌, 엑소페린, 라니빅에스, 메디락에스 마그밀 1T씩 BID",
        "POD#7~ T/S/O : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "Chest PA",
        "C-spine AP/Lat",
        "C-spine MRI",
        "POD#6",
        "C-spine AP/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "EKG, I/O 체크",
        "POD#1",
        "CBC,ESR,CRP",
        "electrolyte(Na&K&cl)",
        "POD#3",
        "CBC, E/C",
        "POD#7",
        "CBC, E/C, electrolyte,",
        "LFT5 (OT/PT Bun/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "▶ Laminplasty 환자의 경위 wd 벌어지지 않도록 예방위해 보행시 팔자붕대 적용(NS2 제외)",
        "▶ 수술시 앞쪽으로 접근하는 TDR & ACDF: 조직의 부종 및 혈종으로 인한 호흡장애여부 확인",
        "(PCA X) --> 숨찬감, 답답함 정도, 허스키한 목소리 확인",
        "▶ 수술시 뒤쪽으로 접근하는 Foraminotomy & Laminoplasty : traction 고정으로 인해",
        "scalp suture 있는지 확인(head pin)",
        "> foraminotomy 는 반드시 head pin 이 있음// NS19 head pin x",
        "▶ NS9 – Cervical 경우 pre) 살론 250mg(2앰플) injection 투여! + 모틴: 주치의확인필요",
        "NS3 – TDR/ACDF 경우 덱사1앰플 prep 해서 OR",
        "▶ Anterior Cervical OP 는 무조건 carotid MRI 촬영필요- 조영제 동의서 받기!(Rt arm 18G)",
        "▶ TDR 환자는 POST C-MRI 진행 안함",
        "▶wd 앞(TDR & ACDF)- SOW-미음-죽",
        "▶wd 뒤(Lamino, forami)-죽-밥-밥",
        "◈ NS(신경외과) 정규 처방 ◈"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "신경계",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_MINOR_OP_MD_LF_MF_LP",
      "category": "수술 / 시술",
      "title": "NS Minor OP MD/LF/MF/LP 정규처방",
      "aliases": [
        "NS Minor OP MD/LF/MF/LP 정규처방",
        "NS",
        "Minor",
        "OP",
        "MD",
        "LF",
        "MF",
        "LP",
        "정규처방",
        "minor op",
        "디스크절제술"
      ],
      "urgency": "routine",
      "summary": "1. MD,LF,MF,LP(현미경하 디스크절제술)",
      "indications": [],
      "preparation": [],
      "steps": [
        "1. MD,LF,MF,LP(현미경하 디스크절제술)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g QD",
        "로이솔 1@QD",
        "보트로파제 1@ BID",
        "모틴 + NS100",
        "세파제돈1.0g QD",
        "(지속여부 확인)",
        "보트로파제 1@ TID",
        "보트로파제 1@ TID",
        "경구약",
        "아덴만, 엑소페린, 라니빅에스, 메디락에스, 마그밀 1T씩 BID",
        "NS3) 클린자 CR, 파모티딘, 라시도필, 마그밀->",
        "AAP, 파모티딘, 라시도필, 마그밀 아이알코돈 5mg",
        "방사선",
        "L-spine MRI",
        "L-spine AP/Lat",
        "POD#5",
        "L-spine AP/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에 한해서)",
        "LAB",
        "60세이상",
        "혈전스타킹 착용",
        "죽-밥-밥",
        "JP제거여부 확인",
        "POD#5",
        "CBC, E/C",
        "▶ NS7 (이동근원장님)- 환자가 퇴원할 때 직접소독하면서 sterile strip 제거함",
        "▶ 흉추(thoracic) 수술 시 당연히 T-spine 촬영",
        "▶ MD, LF(MIS2) -> OP day 만 로이솔1@ BID, 모틴 QD : general anethesia 일 경우",
        "▶POD#1 일째 lab 확인후 anti d/c 확인"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_PEID_PELD_MED",
      "category": "수술 / 시술",
      "title": "NS PEID/PELD/MED 정규처방",
      "aliases": [
        "NS PEID/PELD/MED 정규처방",
        "NS",
        "PEID",
        "PELD",
        "MED",
        "정규처방",
        "내시경",
        "POST MRI"
      ],
      "urgency": "routine",
      "summary": "2. PEID.PELD.MED(경피적 내시경하 디스크절제술)",
      "indications": [],
      "preparation": [],
      "steps": [
        "2. PEID.PELD.MED(경피적 내시경하 디스크절제술)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g QD",
        "세파제돈1.0g BID",
        "경구약",
        "아덴만, 엑소페린, 라니빅에스, 메디락에스 마그밀 1T씩 BID",
        "POD#2~ POD#4 : 메섹신캅셀500mg 2cap씩 TID->POD#5 일째 d/c",
        "방사선",
        "POST",
        "L-spine SED MRI",
        "(POST MRI)",
        "POD#5",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "POD#5",
        "CBC, E/C",
        "▶ PEID는 MRI를 POD#2 일째 촬영",
        "▶ PELD & PEID(MIS) 는 MRI를 POD#1 일째 촬영",
        "▶ 흉추(thoracic) 수술 시 당연히 T-spine 촬영"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_PVA___VIT_D_TLSO",
      "category": "수술 / 시술",
      "title": "NS PVA 정규처방 / Vit D / TLSO",
      "aliases": [
        "NS PVA 정규처방 / Vit D / TLSO",
        "NS",
        "PVA",
        "정규처방",
        "Vit",
        "TLSO",
        "PVP",
        "Kyphoplasty",
        "Vit D",
        "DBM"
      ],
      "urgency": "routine",
      "summary": "3. PVA- on ser 2주후",
      "indications": [],
      "preparation": [],
      "steps": [
        "3. PVA- on ser 2주후",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3",
        "수액",
        "DBM 사용하는 환자",
        "① N/S 500",
        "② 데카민 250",
        "DBM 사용하지 X 환자",
        "5DS 1L, + KCL 20meq",
        "NS500",
        "주사",
        "세파제돈1.0g QD",
        "경구약",
        "아덴만(클린자CR) 엑소페린, 파모티딘, 메디락에스 마그밀 1T씩 BID- 저녁식후부터",
        "POD#1 : 아스피린 100mg 1t 추가, 시너젯ER 세미, 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "Chest AP",
        "L-spine AP/Lat",
        "L-spine MRI",
        "BMD기준이 안되는 환자(DBM 1cc 사용하여 진행시 V-D 시행)",
        "▶ 퇴원후 POD#7 일째 본드 또는 steril strip 외래에서나 집에서 자연제거",
        "▶ POD #1일째부터 아스피린 1t QD 시작(단 자가 항혈전제 있는경우는 자가약으로 복용)",
        "▶ 흉추(thoracic) 수술 시 당연히 T-spine 촬영",
        "▶ 모든 PVA 환자는 VIt D 투여 & 항혈전제스타킹 착용! &TLSO brace",
        "▶ 여자- Foley 가지고 있음. 남자- Foley 거의 안함",
        "◈ NS(신경외과) 정규 처방 ◈"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_TBA_PEN_NEUCLEOPLASTY",
      "category": "수술 / 시술",
      "title": "NS TBA/PEN/Neucleoplasty 시술 전후",
      "aliases": [
        "NS TBA/PEN/Neucleoplasty 시술 전후",
        "NS",
        "TBA",
        "PEN",
        "Neucleoplasty",
        "시술",
        "전후",
        "ABR",
        "NPO",
        "세파제돈"
      ],
      "urgency": "routine",
      "summary": "시술",
      "indications": [],
      "preparation": [],
      "steps": [
        "시술",
        "1. TBA/ PEN (22G angio 가능)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "5DS 1L",
        "주사",
        "세파제돈1.0g QD",
        "(시술전 병동투여)",
        "경구약",
        "아덴만, 엑소페린, 파모티딘 1T씩 BID",
        "▶ 시술전 병동에서 세파제돈 1g IV 투여 후 시술진행",
        "▶ TBA: 시술후 30분 ABR 하고 퇴원 & 시술 4시간전 NPO",
        "▶ PEN 2시간 ABR",
        "2. Neucleoplasty (18G angio 필요)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3",
        "수액",
        "5DS 1L",
        "주사",
        "세파제돈1.0g BID",
        "경구약",
        "아덴만, 엑소페린, 파모티딘 1T씩 BID",
        "POD#2 ~ POD#4 : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "POST MRI 촬영 안함",
        "▶ 시술전 병동에서 세파제돈 1g IV 투여 후 시술진행",
        "▶ 시술후 2시간 ABR 하고 퇴원 & 시술 4시간전 NPO"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_OS_TKRA_THRA___H_VAC",
      "category": "수술 / 시술",
      "title": "OS TKRA/THRA 정규처방 / H-vac / 자렐토",
      "aliases": [
        "OS TKRA/THRA 정규처방 / H-vac / 자렐토",
        "OS",
        "TKRA",
        "THRA",
        "정규처방",
        "H-vac",
        "자렐토",
        "OS major",
        "CPM",
        "DVT"
      ],
      "urgency": "routine",
      "summary": "Major OP-1.TKRA/THRA",
      "indications": [],
      "preparation": [],
      "steps": [
        "Major OP-1.TKRA/THRA",
        "OP day",
        "POD #1~2",
        "POD #3~5",
        "POD#6~",
        "수액",
        "① 플라즈마 솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "① 플라즈마 솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "POD#3",
        "①플라즈마 솔루션 1L",
        "마로비벤",
        "주사",
        "세파제돈 1 vial BID",
        "세파제돈 1 vial BID",
        "POD#5일까지",
        ">세파제돈 1 vial BID",
        "페니마돌 1@ BID",
        "POD#7일까지",
        ">페니마돌 1@ BID",
        "경구약",
        "자렐토10mg",
        "> 수술 후 6~8시간 후",
        "단, OS8) AAP 2T",
        "OS1 ->트레스탄, 시너젯ET, 메디락에스, 마그밀,가스티안, 엔테론",
        "OS2 ->트레스탄, AAP2T, 메디락에스, 마그밀,가스티안, 엔테론",
        "OS3 ->트레스탄, 아데만, 메디락에스 마그밀,가스티안, 엔테론(마이폴 추가)",
        "OS7 ->트레스탄, 쎄레브이200, 메디락에스 마그밀,가스티안, 엔테론",
        "OS8 ->트레스탄, AAP1T, 메디락에스, 가스티안(프로맥)",
        "OS9 ->트레스탄, 쎄레브이200, 메디락에스, 마그밀, 가스티안, 트리돌, 엔테론",
        "공통 만60세 이상만 투여 -> 자렐토10mg (TKRA : OP day 포함 POD#13일까지,",
        "THRA : Op day 포함 POD#34일까지 투여)",
        "방사선",
        "특수검사",
        "Knee AP/Lat",
        "Pelvis AP",
        "POD#2 Chest PA",
        "POD#4 Vein doppler f/u",
        "(OS8 POD#6 V-D)",
        "POD#5 sEMG f/u",
        "(Fx 환자 제외)",
        "POD #10",
        "> T/S/O 후",
        "Knee AP/LAT,",
        "lower extremity",
        "scanogram,",
        "Pelvis AP",
        "LAB",
        "OS8) post CBC",
        "OS8만!) 수술후",
        "1시간지나서 clamp 된 H/V open 후 1/3 pressure 유지!",
        "도고스타킹, DVT PUMP적용!",
        "POD#1",
        "CBC, electrolyte(NA&K&CL)",
        "UA",
        "POD#2",
        "CBC, E/C, electrolyte,",
        "LFT5 (OT/PT BUN/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#5 CBC, E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT BUN/CR",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#10",
        "CBC, E/C",
        "▶ OS1(비모보, 카발린50 : 수술 1시간 전) OS2(세레브이200 : 수술 1시간 전)",
        "OS3(세레브이200, 카발린50) OS7(세레브이200) OS8: 무, OS9(비모보, 카발린50mg 수술 1시간전)",
        "▶ 자렐토 기준이 안되는 환자 -> POD1~7일까지 크렉산 40mg QD 투여, 그 후 아스피린 1T 으로 변경 투여",
        "59세 이하 UKA &bipolar-> 혈전예방위해 자렐토 기준 안되어 POD#1 크렉산 투여함",
        "▶ TKRA POD#2 일부터 CPM start, POD#7 도수치료",
        "▶ OS1-->H/V natural & JP full pressure 유지! // POD#5 H/V 제거!",
        "OS3-->수술당일 H/V natural 유지! & POD#1 Full Pressure 유지!",
        "POD#2 H/V 무조건 제거!"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_OS_TSRA_TARA_BIPOLAR",
      "category": "수술 / 시술",
      "title": "OS TSRA/TARA/Bipolar 정규처방",
      "aliases": [
        "OS TSRA/TARA/Bipolar 정규처방",
        "OS",
        "TSRA",
        "TARA",
        "Bipolar",
        "정규처방",
        "크렉산"
      ],
      "urgency": "routine",
      "summary": "Major OP- 2. TSRA / TARA / Bipolar",
      "indications": [],
      "preparation": [],
      "steps": [
        "Major OP- 2. TSRA / TARA / Bipolar",
        "OP day",
        "POD #1~2",
        "POD #3~5",
        "POD#6~",
        "수액",
        "① 플라즈마 솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "①플라즈마솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "POD#3",
        "① 플라즈마 솔루션 1L",
        "마로비벤 2@+KCL 20mEq",
        "주사",
        "세파제돈 1 vial BID",
        "세파제돈 1 vial BID",
        "페니마돌 1@ BID",
        "크렉산 40mg QD",
        "(bipolar 만!)",
        "POD#5일까지",
        ">세파제돈 1 vial BID",
        "페니마돌 1@ BID",
        "크렉산 40mg QD",
        "(bipolar 만!)",
        "POD#7일까지",
        ">페니마돌 1@ BID",
        "크렉산 40mg QD",
        "(bipolar 만!)",
        "경구약",
        "OS1 ->시너젯ER세미",
        "OS2. OS3. OS5 ->세레브이 , 트리돌",
        "공통 ->트레스탄, 마그밀, 메디락 에스 통증 호소하면 아이알코돈 추가 가능",
        "POD#8 ~ 아스피린 1T QD",
        "방사선",
        "특수검사",
        "Shoulder AP",
        "Ankle AP/Lat",
        "Pelvis AP",
        "POD#2 Chest PA",
        "POD #10",
        "> T/S/O 후",
        "X-ray f/u",
        "LAB",
        "POD#1",
        "CBC,electrolyte(NA&K&CL) UA",
        "POD#2",
        "CBC,E/C, electrolyte,",
        "LFT5 (OT/PT BUN/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#5 CBC, E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT BUN/CR",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#10",
        "CBC, E/C",
        "▶ OS1(비모보, 카발린50 : 수술 1시간 전)",
        "OS2(세레브이200 : 수술 1시간 전) OS3(세레브이200, 카발린50) OS7(세레브이200)",
        "OS8: 무, OS9(세레브이200)",
        "▶ TSRA(OS1,OS3,OS5) -> POD#2 일부터 CPM 시작",
        "▶ TSRA 환자가 general anethesia 할 경우 post~pod#1 로이솔, 모틴 추가함",
        "▶ 당뇨환자일 경우",
        "1) 5DS1L,5DW1L 대신 NS 1L",
        "2) 멀티플렉스 1.1L + 휴물린알 20단위",
        "▶ OS1-->H/V natural 유지!",
        "OS3-->H/V Full Pressure 유지!",
        "◈ OS(정형외과) 정규 처방 ◈",
        "Minor OP",
        "1. 절개가 있는 경우 (A/S HTO, A/S ACL(PCL) recon, MBO, LM repair, H-V, OR IF 등 )",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3~",
        "수액",
        "플라즈마 1L + 마로비벤2@"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "수술 / 시술",
        "v43_uploaded_manual",
        "NS OS 메뉴얼"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_____________1",
      "category": "업로드 원문 / 검색 보강",
      "title": "추가 업무 매뉴얼 원문 검색 보강 1",
      "aliases": [
        "추가 업무 매뉴얼 원문 검색 보강 1",
        "추가",
        "업무",
        "매뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "1. CPR",
        ": 발견 즉시 흉부압박 (루카스 시작) -> 6114 CPR방송 ->DNR 여부확인",
        "> 보호자 ,주치의 call -> Lucas ,E-cart, 제세동기",
        "epi 4분당 1번 ,비본 ,N/S 연결",
        "ambu 6초 1번 (I-gel or intubation 시)",
        "> ROSC 되면 Vent 연결",
        "> CPR 모니터링 기록지 작성",
        "2. Intubation",
        "준비 : Video laryngoscope Mac 3,4 / Endo tube (6.5 7.0 7.5 )",
        "멸균증류수 1L ,air way , syrnge 10 cc",
        "> Ventilator setting",
        "약물 : etomidate 10mg ,20mg ->마취제",
        "vecuonium 1mg ,4mg ->근육이완제",
        "행위료 : tracheal intubation (기관 내 삽관술)",
        "동의서 : 인공호흡기 치료 동의서 ,기관 내 삽관 시술 동의서",
        "(단, NIV mask 는 인공호흡기 치료 동의서만 )",
        "3. O2 therapy",
        "4. 영상 검사",
        "5. Tbc 검사",
        "6. HOME Vent",
        "7. ABGA 채혈",
        "A-line의 정의 및 목적",
        ": A-line은 동맥에 카테터를 삽입하여 침습적으로 혈압을 지속적으로 측정하고,",
        "반복적인 동맥혈 가스 분석 (ABGA)을 시행하기 위한 장치",
        "주요 목적 : 실시간 혈압 측정 (특히 MAP), 혈역학적 변화의 즉각적인 파악,",
        "잦은 ABGA 채혈로 인한 반복 천자 방지",
        "삽입 부위 : Radial artery(주로 가장 많이 하는 부위), femoral artery,",
        "brachial artery, dorsal artery",
        "준비물 : A-line catheter(angio 20G, 22G), A-line kit, A-line monitor cable,",
        "pressure pump bag, 수액, iv multifix, 트랜스듀서",
        "8. A-line zeroing",
        "zeroing 절차",
        "1. 트랜스듀서를 기준점: 환자의 심장 높이(4번째 늑간- 액와중심선)에 위치",
        "2. 트랜스 듀서에 연결된 A-line kit 3-way를 위 방향으로 조정한 후 모니터에서",
        "zero 버튼 클릭 -> zero completed 확인",
        "3. 트랜스 듀서에 연결된 A-line kit 3way 방향을 오른쪽으로 조정함.",
        "A-line 파형",
        "Dicrotic notch 중복절흔: 심실압이 대동맥보다 낮아질 때 대동맥 판막이",
        "닫히면서 생김.",
        "Overdamping: 트랜스듀서 피그테일 당겼다 놓으면 비스듬한 사각형 파형 나타남,",
        "기준선 위아래 진동 거의 없음. 실제보다 수축기 낮게/ 이완기 높게 측정",
        "오버댐핑 발생 이유: 프레셔 백 압력 낮을 때, 연결된 선 꼬이거나 막힘",
        "under damping: 피그테일 당겼다 놓으면 기준선 위아래 수많은 진동 발생,",
        "실제보다 수축기 높게/이완기 낮게 측정, 발생 이유: 연결선 길이가 길 때,",
        "관이 딱딱한 경우",
        "Mean arterial pressure (MAP) 평균 동맥압 => 심장 주기 동안의 평균 압력",
        "으로 관상동맥 순환 및 조직 관류를 위한 최소한의 유지압력-MAP= 1/3SBP+ 2/3DBP,",
        "정상: 70mmHg 유지 파형 정상인데 수치가 이상한 경우 트랜스듀서 위치 변화, Zeroing,",
        "환자 체위 변화 여부",
        "9. CVP(중심정맥압, Central venous pressure)",
        "CVP는 우심방과 상대정맥 (SVC) 내 혈압을 측정하는 값으로, 혈액량 상태,",
        "심장 기능, 정맥 환류를 평가하는 중요한 지표",
        "CVP 정상 및 의미",
        "정상: CVP: 2-8mmHg, 5-10cmH2O",
        "CVP 높을 때:　>8mmHg => 심부전, 과수액, 폐동맥 고혈압, 혈액량 과다",
        "CVP 낮을 때: <2mmHg => 탈수, 저혈량 쇼크, 출혈, 정맥 확장",
        "CVP 측정 방법",
        "1. 중심정맥관을 통한 측정",
        "● 쇄골하정맥, 경정맥, 대퇴정맥을 통해 삽입된 중심정맥관 사용",
        "● CVP 루멘에 압력 변환기 연결 후 측정",
        "● 환자를 반좌위로 유지 후 측정",
        "2. 수위법",
        "● 중심정맥관에 수위계 연결 후 정맥압 측정",
        "● 기준점: 우심방과 같은 높이 (4번째 늑간-액와 중심선)",
        "CVP 측정 시 주의 사항",
        "호흡 주기에 따라 CVP 변동 가능 -> 호기 말에서 측정",
        "측정 전 혈전 있는지 확인 후 saline flush로 제거",
        "정확한 기준점 유지하여 측정 (기준점: 4번째 늑간-액와 중심선)",
        "CVP에 영향을 주는 요인",
        "10. I/O",
        "11. Mental",
        "12. GCS"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_____________2",
      "category": "업로드 원문 / 검색 보강",
      "title": "추가 업무 매뉴얼 원문 검색 보강 2",
      "aliases": [
        "추가 업무 매뉴얼 원문 검색 보강 2",
        "추가",
        "업무",
        "매뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "13. Pupil",
        "14. 신경학적 검사",
        "NS 보조기",
        "OS 보조기",
        "15. CRRT alarm",
        "16. DIC 진단 기준",
        "17. BST",
        "18. Sliding scale",
        "19. 항생제 AST",
        "AST",
        "1:5000",
        "200mcg:1cc 만드는 게 목표",
        "500mg",
        "Ns 2.5ml mix",
        "1g",
        "Ns 5mg mix",
        "2g",
        "Ns 10mg mix",
        "4.5g",
        "Ns 20mg mix",
        "￨ 0.1재고 ns0.9 mix 1ml 만들고",
        "￨ 다시 0.1재고 ns0.9 mix 1ml 만들어 0.1ml만 ID",
        "￨ 10분 후 결과 확인",
        "20. 고위험 약물",
        "<항부정맥제>",
        "Bisoprolol 콩코르",
        "Dapaglifozin : 심부전 치료제(다파신, 다파브로, 자디앙",
        "Amiodarone(코다론)",
        "l 항부정맥제(칼륨 채널 차단제)",
        "l Class 3 항부정맥제",
        "l 심장의 전기 신호를 조절하여 심박수와 리듬을 정상화하는 역할",
        "l 광범위한 부정맥 치료 가능(심실성, 심방성 부정맥 모두 효과)",
        "l VT, VF, AF, A-flutter에 모두 사용됨.",
        "l 긴 반감기(수일~수개월)로 인해 약물 축적가능 -> 부작용 모니터링 필수",
        "l 칼륨 채널 차단 -> 활동전위 연장 -> 심박수 조절",
        "l 나트륨&칼슘 채널 차단 효과 -> 심장 수축 조절",
        "l 베타 블로커 작용도 일부 포함 ->심박수 감소효과",
        "loading",
        "코다론 150mg(1@)+5% DW 100ml -> 10분간",
        "Maintenance",
        "코다론 900mg(6@)+5%DW 500ml",
        "처음 6시간 : 33ml/hr(1mg/min)",
        "이후 : 16.5cc/hr(0.5mg/min)",
        "*이후 장기 유지가 필요시 PO 처방",
        "금기",
        "l NS mix(침전물 생김. 단독 line)",
        "l 저혈압, 서맥, QT long",
        "Adenosine",
        "l 발작성 상심실성 빈맥(SVT,PSVT 150~250bmp)",
        "l 방실 결절에 작용해 전기 전도 늦춤, 방실결정 통한 재유입 차단",
        "l 짧은 반감기(10초)로 신속 주입",
        "1차",
        "3mg(peripheral : 6mg) 신속 IV",
        "2차",
        "1차 후 반응 없을 시(상심실성 빈맥 1~2분 내 소실X) 6mg(peripheral : 12mg) 신속 IV",
        "3차",
        "2차 후 반응 없을 시, 2차와 동일 용량",
        "정상동리듬으로 돌아오지 않는 경우",
        "Synchronized cardioversion 준비",
        "금기",
        "l COPD, 저혈압, QT long",
        "21. 아그라스트주",
        "22.헤파린 모노그램",
        "23. DNR",
        "DNR 서류 작성",
        "￨ 사전연명조사지 작성 여부 따라 필요 서류 다름"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_____________3",
      "category": "업로드 원문 / 검색 보강",
      "title": "추가 업무 매뉴얼 원문 검색 보강 3",
      "aliases": [
        "추가 업무 매뉴얼 원문 검색 보강 3",
        "추가",
        "업무",
        "매뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "￨ 조사지(+): 9, 10, 13호",
        "￨ 조사지(-): 9, 11, 13호",
        "￨ 9, 10, 11, 13호 파일은 ICU main 컴퓨터 파일에 있음",
        "￨ 이행 어디까지 하는지 확인",
        "24. 수혈",
        "혈액 수령 방법",
        "수혈 절차",
        "1. 수혈동의서(입원마다",
        "2. 수혈처방",
        "3. 혈액요청서(EMR) 뽑아서 내리기",
        "수혈예정일:처방일",
        "채혈일: cross matching 검체 내린 날",
        "4. ABO,Rh Typing(EDTA 1,하루 한 번)",
        "5. Antibody : 비정상적 항체 확인(",
        "Plain 1, 하루 한 번)",
        "6. Cross- matching(72시간마다) : 응집반응 평가",
        "7. 6135(혈액은행, 진검)전화해서 준비되면 타달라고 하기",
        "종류",
        "적응증",
        "온도",
        "투여",
        "기대",
        "RBC",
        "Hg",
        "냉장",
        "1.5-3hr",
        "1g/dL­",
        "PC",
        "PLT",
        "실온",
        "Full drop",
        "5Kmm­",
        "APLT",
        "PLT",
        "실온",
        "Full drop",
        "30Kmm­",
        "FFP",
        "PT INR­",
        "냉장",
        "1-2hr",
        "INR 2~10%￸",
        "Cryo",
        "Fibrinogen",
        "냉장",
        "Full drop",
        "1팩당",
        "10mg/dl­",
        "*FFP : 혈소판 제외 모든 clotting factor 보충",
        "*PC,APLT는 아이스백 필요없음.",
        "적혈구 제외 모든 물질 포함=혈장",
        "응고인자(피브리노겐, 프로트롬빈), 알부민, 면역 글로불린",
        "*Cryoprecipitate : 동결침전제제",
        "FFP를 centrifuge해서 얻어짐.",
        "피브리노겐 중심의 응고인자 보충에 사용",
        "I/O 40",
        "*RBC 수혈시 칼슘농도 monitor : RBC 안 sodium citrate(항응고물질)있어 출혈 위험성이 커짐. 칼슘이 sodium citrate와 binding하여 출혈 위험성￸",
        "*APLT : apheresis platelet =Single donor plateltet",
        "APLT 1=PC 6~8개",
        "<응고인자>",
        "l PT(prothrombin time) : 와파린 복용시 prolong",
        "l PT INR : 정상범위(0.8~1.3) 와파린 복용(2~3)",
        "l APTT(activated partial thromboplastin time)",
        "정산범위(22.7~44.3)헤파린 복용 환자의 경우 정상의 1.5-2.5배",
        "l Fibrinogen : 감소시 출혈가능성­",
        "l D-dimer : 섬유소 분해산물로 혈액속에서 발견되는 경우는 혈전이 있다 사라진 것을 의미. 폐색전증 환자나 파종성 혈관 내 응고장애를 가진 환자에게 발생 정상(0~0.61)",
        "25. Lab bottle",
        "채혈 순서",
        "차광검체 라벨 2개 (검체 bottle, 은박지 포장 위)",
        "엽산 검사 차광 (3~4cc)",
        "외주검사",
        "Sputum Cx"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_____________4",
      "category": "업로드 원문 / 검색 보강",
      "title": "추가 업무 매뉴얼 원문 검색 보강 4",
      "aliases": [
        "추가 업무 매뉴얼 원문 검색 보강 4",
        "추가",
        "업무",
        "매뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "– 준비물 : 서지컬 글러브, 검체용기, 에어웨이, N/S, 카테터",
        "서지컬 글로브 오픈해서 에어웨이, N/S, 검체용기 까놓고 장갑착용",
        "Suction이랑 검체용기 연결 (투명 – Suction이랑, 갈색 – 카테터랑)",
        "N/S 관류 후 Airway 장착 후 Suction, N/S 관류까지",
        "컨타 주의 , 컨타된 손, 멸균 손 정해서 수행",
        "□ Urine Cx",
        "dressing set(베타딘, 에탄올 솜, 20cc 주사기) 검체 용기​, 멸균 장갑",
        "1. 멸균장갑 착용하고, 포트를 포비딘소독솜으로 소독",
        "2. 2분간 자연건조를 시킨 뒤 주사기를 검체채취 포트에 삽입하여",
        "10cc 정도 소변을 채취​",
        "3. 채취한 소변은 바로 urine culture 전용 용기에 담기",
        "RAT (호흡기 19종 PCR(학 메디칼 빨간뚜껑 통)",
        "얇은 면봉 코, 굵은 거 입에 직선으로 넣어서 채취 후 검체 통에 부러뜨려서 넣기) -> RAT 검사 후 ‘현장 검사 결과 관리’ 가서 결과 입력",
        "26. Blood culture",
        "Blood Culture (녹십자 사이트에서 결과 확인 가능)",
        "처방 보조 – 채혈접수업무 – B11, B12 발행 후 재발행",
        "혐기 1 호기 1 혐기 2 호기 2로 라벨 붙이기 (호기(파랑), 혐기(갈색))",
        "준비물 : Dressing set 2개",
        ": 각각 (헥스왑 / 에탄올 볼 4개씩) 20cc 1개(니들 바꿔서) 토니켓, 글러브, 거즈 (소독 : 에탄올 – 헥스왑 (부위, 병 모두))",
        "1. 검사 설명(30분 간격으로 다른 부위에서 총 2회 채취 설명)",
        "2. blood Cx. bottle 플라스틱 뚜껑 벗기기, 토니켓 묶고 Vein 확인",
        "소독 전 손톱으로 눌러 vein 표시",
        "4. dressing set 열고 glove 착용",
        "5. 에탄올 볼 -> 헥스왑으로 Cx. bottle 입구 닦기(호기, 혐기 1쌍)",
        "채혈 부위도 에탄올 볼 -> 헥스왑으로 닦기",
        "6. 주사기 이용하여 16~20cc 채혈",
        "투석 환자의 경우 투석 팔 제외한 팔 한쪽과 다리",
        "유방암 수술 환자 - 수술 부위 제외 팔 다리",
        "수액 및 약물 주입 혈관 제외",
        "7. 토니켓 풀고 거즈와 테이프로 지혈",
        "8. 혐기-> 호기 순서로 반반씩 담기 (갈 -> 파)",
        "같은 부위에서 나갈 거면 30분 후에 다시 채혈",
        "blood, sputum culture는 슈터기 X 검체보관함에 넣기",
        "중심 정맥에서 채혈할 경우엔 충분히 regurge 후에 채혈함",
        "* chemoport, SVC, JVC 같은 중심정맥관을 가지고 있다면 lumen따라 : 균이 자라고 있다면 제거해야 하기 때문에 두 번째 채혈 시 같은 루멘에서 채혈하지 않기 (1루멘당 1쌍) 중심정맥관이 있다면 2쌍+중심정맥관1쌍이 처방",
        "27. CRE / CPE",
        "CRE(파란 뚜겅 통), CPO(초록색) (Rectal swab)",
        "CAG & PCI 한 사람 CRE, CPO, RAT 안함",
        "Tip Cx CRE 검체용기(파란 뚜껑 통)로 나감.",
        "MRAB sputum",
        "3~5일마다 f/u",
        "3회 음성 시 격리해지",
        "CRE, VRE",
        "일주일마다 f/u",
        "3회 음성 시 격리해지",
        "MSSA, MRSA(nasal swab)",
        "f/u 안함.",
        "격리안함. 손씻기만 시행",
        "<의사 처방에 따라 진행>",
        "obs",
        "origin 찾기(ex.sputum cx)",
        "예방적 anti",
        "28. PCD",
        "29. Spinal tapping",
        "30. GS08 백남현 원장님",
        "31. Dressing",
        "삽관, 관 제거 시 - SDD, EVD 등 관 뺄 때",
        "S-set에 베타딘 스왑(볼에 베타딘 용액 묻혀서), 거즈, 베타폼, 나일론 2-0 넣고 레노픽스, EB, 장갑",
        "Suture(?point), dressing Charting 넣기",
        "소독제",
        "특징",
        "사용 예시",
        "생리식염수",
        "세포 자극 X",
        "일반 상처 세척",
        "베타딘",
        "광범위 항균",
        "감염 위험 상처, 수술 전 소독",
        "클로르헥시딘",
        "강력한 소독, 피부 친화적",
        "카테터 삽입 부위, 중심정맥관 소독",
        "알코올",
        "빠른 살균효과, 휘발성"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_____________5",
      "category": "업로드 원문 / 검색 보강",
      "title": "추가 업무 매뉴얼 원문 검색 보강 5",
      "aliases": [
        "추가 업무 매뉴얼 원문 검색 보강 5",
        "추가",
        "업무",
        "매뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "주사부위, 피부 소독 (개방성 상처엔 X)",
        "과산화수소",
        "기포 발생 -> 이물질 제거",
        "괴사조직 제거",
        "(지속 사용 X)",
        "□ 일반 상처 소독",
        "생리식염수로 부드럽게 세척",
        "과다한 삼출물 제거",
        "깨끗한 드레싱 적용",
        "□ 감염된 상처 소독",
        "포비돈 요오드 or 클로르헥시딘 사용",
        "배농 필요시 습윤 드레싱 적용",
        "감염 심하면 항생제 연고 도포",
        "□ 수술 후 상처 소독",
        "실밥 제거 전후 포비돈 요오드 사용",
        "절개 부위 감염 여부 확인 (발적, 열감, 삼출물)",
        "거즈 드레싱 유지",
        "□ 욕창 부위 소독",
        "생리식염수 또는 하이드로겔 사용 (피부보호)",
        "괴사 조직 제거 필요 시 소독 후 의료진 보고",
        "습윤 드레싱 적용",
        "□ 일반 Dressing",
        "일회용 D-set에 헥스왑 + 거즈(+픽스), 테가덤",
        "장갑 착용 후 헥스왑으로 부위 소독, 거즈+픽스나 테가덤 CHG",
        "oozing 있으면 거즈, 없으면 테가덤",
        "initial 시 oozing 있으면 무조건 교체",
        "소독 후 거즈, 픽스 (2일), 필름 7일",
        "A, C line, CTD, PCD, PEG 필름 드레싱 X",
        "dressing 교체 시 d/t 적어 차팅",
        "거즈 + CHG X. 상처 위 듀오덤",
        "A line 헥스틱, multifix dressing",
        "abrasion beta foam + eb?",
        "C-line Dressing : D-Set에 헥스왑 + 테가덤 장갑",
        "□ PCD(percutaneous Catheter Drainage)",
        "배액량 짜고 알코올 스왑으로 닦기",
        "Position 시 Kelly로 잠그기, 스키징, 밀킹 가능",
        "자연배액감시 : ACE VAC Clamping 안하고 side rail에 묶으면 됌",
        "PCD 대상자 fluid 갖고 올라오면 Lab 나갈 수도 (Coincal = UA검체통)",
        "□ 장루 Dressing",
        "N/S 적셔서 세척 후 장루 보호판 2-3mm 여유있게 잘라서 장루에 보호판 페이스트 발라서 붙이기",
        "– 보호판, 주머니 결합 – 주머니 끝 잠그기",
        "□ SDD dx(coban dx(탄력 붕대)) : 드레싱 카트에서 길게 자르고 끝부분 돌려 묶고 바라클라바 쓰듯이 목까지 덮고 이목구비 나올 수 있게 찢고 목에 메디폼 적용",
        "□ EVD bag 소독 – 일회용 D-set에 거즈, 포비돈 스왑, 멸균장갑",
        "장갑끼기 전 베타딘 스왑 까고 D-set 열고 거즈 벗기고 장갑 끼고 베타딘으로 소독 -> 용기에 받고 닫고 소독 후에 거즈 싸기 + 고무줄로 고정",
        "32.원내 주요 전화번호"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "추가 업무 매뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "추가 업무 매뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_________1",
      "category": "업로드 원문 / 검색 보강",
      "title": "기관절개관 원문 검색 보강 1",
      "aliases": [
        "기관절개관 원문 검색 보강 1",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "기관절개관(Tracheosomy)",
        "1. 목적",
        "1) Upper airway abstruction 상부 기도 폐쇄",
        "2) Respiratory failure 호흡 부전",
        "3) Disorders of diaphragm 횡경막의 기능 부전- 폐의 수축 팽창 방해",
        "4) Severe burns 심한 화상",
        "5) Anaphylactic reaction 아나필락틱 반응- 기도가 좁아지고 숨이 안 쉬어짐",
        "2. 기관절개과 삽입과 제거 과정",
        "Single cannula -> Double cannula -> 기관절개관 마개 -> speaker valve -> 절개관제거",
        "★ 기관절개관을 전체 제거하고 나면 대게 24-48시간 이내에 hole이 저절로 닫힘",
        "3. 합병증",
        "1) 기관절개관 폐쇄, 출혈",
        "2) 육아조직 형성, 기관지 협착",
        ">기관절개관 장기적 사용 or cuff pressure가 과하게 들어가 있는 경우",
        "3) 기관식도루, 기관연화증, 기관무명동맥루",
        "4) 폐렴, 기흉, 폐기종, 후두신경 손상, 감염 등",
        "★ 기관절개관의 적용",
        "1) 튜브는 2번째 3번째 Tracheal ring 사이 정중앙에 삽입",
        "2) 환자마다 개별적으로 적용하는 압력의 범위가 다르지만 일반적으로 20-27mmHg",
        "과한 압력으로 적용하는 경우 기관지 협착에 의한 괴사가 발생할 수 있음",
        "적은 압력으로 적용하는 경우, 인공호흡에 의해 전달되는 공기의 양과 압력이 제대로 전달되지 않을 수 있음",
        "3) 일반적으로 외관 교체는 1-3개월 간격으로 시행(내관은 daily 또는 많이 오염되었을 때)",
        "4) 튜브 주변을 소독할 경우 소독액 사용이 흡인 위험성이 있어 생리식염수 사용",
        "5) 침상 머리를 올려서 흡인의 위험을 최소화",
        "특징",
        "내관의 유무",
        "(분비물 양에 따라)",
        "Single cannula",
        "◆ 분비물이 많을 때 사용",
        "Double cannula",
        "◆ 수술 후 분비물이 감소할 때 사용",
        "◆ 외관과 내관으로 분리가 가능하여 외관은 그대로",
        "두고 내관만 빼내서 세척 및 소독 후 다시 사용",
        "◆ 비용과 관리면에서 효율적",
        "Cuff 유무",
        "(상기도 호흡에 따라)",
        "cuff 유",
        "◆ 인공호흡이 필요한 환자에게 적용",
        "◆ 수술 후 출혈과 이물질의 흡인을 방지",
        "cuff 무",
        "◆ 인공호흡이 필요 없는 환자에게 적용",
        "Fenetrated 유무",
        "(상기도 호흡에 따라)",
        "Fenetrated",
        "◆ Tube 뿐만 아니라 상기도, 하기도를 통한 호흡 가능",
        "Unfenetrated",
        "◆ Tube를 통한 호흡에만 전적으로 의지",
        "Tube의 윗부분에 구멍이 없는 관과 구멍이 있는 관의 차이는 기존의 환자 비강, 구강 Airway를 사용하느냐 아니냐에 차이다",
        "1) cuff 있는",
        "Mera flex",
        "2) cuff 없는",
        "Teflon, koken",
        "2. 이중내관 기관절개관 (Double Cannula)",
        "1) cuff 있는",
        "Mera sofit, Tracoe REF 302",
        "2) cuff 없는",
        "Tracoe twist, koken",
        "3. 기관절개관 마개",
        "◆ 기관절개관 구멍을 마개로 닫아서 환자의 코와 입으로 숨을 쉬는 self respiration을",
        "하도록 함",
        "(반드시 구멍이 있는 fenestrated tube(위쪽에 구멍이 있는) 사용!!)",
        "4. 기관절개관 발성 보조기구(Speech valve)",
        "◆ 가래가 많아 흡인이 필요한 경우, 마개를 제거 한 후 내관을 통해 suction 가능",
        "◆ 마개를 유지한 채 구강섭취도 가능함",
        "※ 번외",
        "1. portex tube(폴텍스 튜브)",
        "1) cuffed tube(single cannula)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개 직후 및 인공호흡기 치료, 흡인 가능서이 높은 환자에게 사용한다.",
        "(3) 인공호흡기 연결 시 공기가 새지 않고 흡인을 방지한다",
        "(4) 큰 내경을 가지고 있어 공기의 흐름이 원활하다",
        "2) cuffed tube(double cannula, Portex blue line ultra tube)"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "기관절개관",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "기관절개관"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_________2",
      "category": "업로드 원문 / 검색 보강",
      "title": "기관절개관 원문 검색 보강 2",
      "aliases": [
        "기관절개관 원문 검색 보강 2",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "(1) 이중 내강 튜브(외관+내관)+cuff O",
        "(2) cuff가 부드러워 기관벽에 자극을 주지 않고 손상을 최소화 한다.",
        "(3) 기 외에는 single cannula cuffed t-tube와 비슷하다",
        "3) Vocalaid t-tube(suctionaid vocalaid)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개 직후 사용한다",
        "(3) 주변 분비물을 흡인할 수 있는 catheter가 있다.",
        "(4) 분비물이 많은 환자에게 적용하기에 용이하다",
        "(5) 오랜기간 사용하는 환자의 경우 적합하다.",
        "4) Adjustable t-tube (portex blue line t-tube)",
        "(1) 단일 내강 튜브(내관x)+cuff O",
        "(2) 기관절개술 시행 직후 초기에 사용한다",
        "(3) 길이를 조절하고 잠금장치로 잠그는 것이 가능하다. = flange(플랜지)가 있다.",
        "(4) 후두부종, 비만 등 tube 길이 조절이 필요한 경우에 사용한다.",
        "2. Uncuffed tube",
        "(1) 단일 내강 튜브(내관x)+ cuff X",
        "(2) 주로 소아에게 사용된다.",
        "(3) 이외 후두절제술 환자, 환자 스스로 호흡 가능한 경우, 발성 연습을 필요로 하는 경우, 기관절개관 제거 계획중인 환자들에게 적용한다.",
        "(4) 케뉼라 제거 기간동안 사용된다.",
        "★케뉼라 제거: 분미물의 관리, 기도 보호, 환기 및 산소 유지가 되어 기관절개관 발관 준비가 끝났을 경우, 케뉼라 제거를 시행한다.",
        "3. Tracoe tube(트라코 튜브)",
        "1) Twist cuffed",
        "(1) 이중 내관 튜브(외관+내관)+ cuff O",
        "(2) neck plate 부분이 유동성이 있어(유연하여) 장기간 착용하기 편하나 고가이다.",
        "2) Twist un-cuffed",
        "(1) 단일 내강 튜브(내관x)+cuff X",
        "3) Tracoe 소아용",
        "4. Koken tube(코켄 튜브)",
        "(1) 이중내강 튜브(외관+내관) + cuff X",
        "(2) 분비물 양이 감소하면 사용한다.",
        "(3) 붙어있는 분비물 제거가 용이하고 피부 자극이 적다.",
        "(4) corking을 하는 환자의 경우 corking을 시도시 구멍을 막으면 목소리를 낼 수 있다.",
        "(5) 인공호흡기 사용시에는 koken tube 사용이 불가하므로, weaning 단계에서 사용한다.",
        "5. Teflon(테프론 튜브)",
        "(1) 이중 내강 튜브(외관+내관) + cuff X",
        "(2) T-tube 제거 전 연습용으로 사용 가능하다.",
        "자발호흡이 가능해야한다.",
        "(3) speech valve(=cap)",
        "앞을 막으면 대화가 가능하다.",
        "speech valve 사용시 내관을 꼭 제거해야한다.",
        "6. Montgomery tube(몽고메리 튜브)=T자형 기관 유지관",
        "1) 실리콘 기도 스텐트 삽입술",
        "2) 적응증",
        "(1) 기도 협착에 의한 호흡곤란 및 반복적인 혈담",
        "(2) 기도 협착에 의한 심한 기침 및 반복적 폐렴 발생",
        "(3) 기도 협착에 의한 심한 천명음",
        ">기도 협착 환자들에게 주로 사용하는 방법",
        "3) 후두기관 수술 후 기관 스텐트와 기도 겸용으로 사용되는 장치이다.",
        "7. Fenestrated cuffed tube(구멍이 뚫린 기관절개관)",
        "1) 구멍이 뚫린 외관+내관+덮개",
        "2) 하나는 커프로 연결되어 있고, 다른하나는 커프 위 구멍으로 연결되어 있다.",
        "튜브 뒤쪽 벽에 구멍이 있어 공기가 상기도로 통하게 된다.",
        "튜브 입구를 막으면 성대를 진동시켜 목소리가 나올 수 있다.",
        "3) cuff가 있는 경우에는 cuff를 수축시켜 호기가 성대로 올라와 말을 할 수 있게 한다.",
        "4) 내관을 제거하고 덮개로 구멍을 막는다",
        "성대를 진동시켜 목소리가 나오며, 분비물 또한 스스로 배액이 가능하다.",
        "호흡곤란이 있는지 사정이 필요하다.",
        "> 호흡곤란시 덮개를 제거하고 내관 삽입하여 바로 cuff를 팽창시킨다.",
        "5) 내관 삽입 상태에서는 일반적인 t-tube같이 사용한다.",
        "6) 의사소통(자발적 발성), 기관절개관 제거를 위한 단계에서는 fenestrated tube로 변경하는 것이 좋다."
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "기관절개관",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "기관절개관"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________1",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 약어 원문 검색 보강 1",
      "aliases": [
        "NS OS 약어 원문 검색 보강 1",
        "NS",
        "OS",
        "약어",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "◈ NS 수술명 ◈",
        "PEID (Percutaneous interlaminar disectomy) : 경피적 내시경하 추궁간판 제거술",
        "PELD (Percutaneous lumbar disectomy) : 경피적 내시경하 추간판 제거술",
        "MD(Microdisectomy): 추간판 제거술",
        "MF(Medial Fenestration): 내측부 신경관 감압술",
        "LF(Lateral foraminotomy): 외측부 신경관 감압술",
        "ALIF(Anterior lumbar interbody fusion): 전방경유 요추 추체간 융합술",
        "PLIF(Posterior lateral fusion): 후방경유 요추 추체간 융합술",
        "TLIF(Transverse lumbar interbody fusion): 횡단 요추 추체간 융합술",
        "PLF(Posterior lateral fusion): 후-외측 융합술",
        "PPF(Percutaneous posterior Fixation) : 경피적 후방 고정술",
        "ACDF(Anterior cervical disectomy fusion): 전방경유 경추 추간판 제거술 및 융합술",
        "TDR(Total disc replacement): 전 인공 디스크 치환술",
        "PVA(Percutaneous vertebral augmentation): 경피적 척추체 강화술",
        "PVP(Percutaneous vertebral plasty): 경피적 척추체 성형술",
        "Kyphoplasty : 풍선을 이용한 척추체 성형술",
        "Foraminotomy : 추간공 절개술",
        "Laminectomy : 척추후궁 절제술",
        "Laminoplasty : 척추후궁 성형술",
        "Corpectomy : 척추체 치환술",
        "NPT(Neuroplasty) =PEN (Percutaneous neuroplasty) :신경성형술",
        "B-PEN(Balloning percutaneous neuroplasty) :풍선을 이용한 경피적 신경성형술",
        "Neucleoplasty : 수핵성형술",
        "Annulonerucleoplasty : 고중파 수핵성형술",
        "TELA (Trans-Foraminal Epiduroscopic Laser Annuloplasty) :추간공내시경레이저시술",
        "◈ NS 약어 ◈",
        "• HNP(Herniated nucleus pulposus): 수핵 탈출증",
        "• HIVD(Herniated intervertebral disc): 추간판 탈출증",
        "• HLD(Herniated lumbar disc): 요추간판 탈출증",
        "• ICH(Intracranial hemorrhage): 두 개내 출혈",
        "• IVH(Intraventricular hemorrhage): 뇌실내 출혈",
        "• CVA(Cerebrovascular accident): 뇌졸중",
        "• EDH(Epidural hemorrhage): 경막외 출혈",
        "• FBSS(Failed back surgery syndrome) 척추 수술실패 증후군",
        "• LDK(Lumbar degeneration kyphosis) 요추퇴행성 척추 후만증",
        "• OPPL(Ossification of posterior longitudinal ligament) 후종인대골화증",
        "• SDH(Subdural hematoma): 경막하 혈종",
        "• SAH(Subarachnoid hemorrhage): 지주막하 출혈",
        "◈ OS 수술명 ◈",
        "A/S(Arthroscopy): 관절경",
        "A/S Knee(Arthroscopy knee): 무릎 관절경",
        "A/S Shoulder(Arthroscopy shoulder): 어깨 관절경",
        "Acrominoplasty : 견봉 성형술",
        "AMD(Arthroscopic microdisectomy): 관절경을 이용한 수핵제거술",
        "ACL(Anterior cruciate ligament) recon / repair: 전방십자인대 재건술 / 복원술",
        "LCL(Lateral collateral ligament) recon / repair: 측부외측십자인대 재건술 / 복원술",
        "MCL(Medial collateral ligament) recon / repair: 내측측부인대 재건술 / 복원술",
        "PCL(Posterior cruciate ligament) recon / repair: 후방십자인대 재건술 / 복원술",
        "CTR(Carpal tunnel release): 수근관 감압술",
        "CR IF(Closed reduction Internal fixation): 폐쇄정복 & 내부고정",
        "OR IF(Open reduction Internal fixation): 개방정복 & 내부고정",
        "Debridement: 변연절제술, 괴사조직 제거술",
        "E & B(Excision and Biopsy): 절개와 생검",
        "I & D(Incision and Drainage): 절개와 배액",
        "Synovectomy: 활액막 절제술",
        "Bursectomy: 활액낭 절제술",
        "Condroplasty: 연골 성형술",
        "Menisectomy: 반월상 연골 절제술",
        "TKRA(Total knee replacement arthroplasty): 전슬관절 대치술",
        "THRA(Total hip replacement arthroplasty): 전고관절 대치술",
        "TARA(Total ankle replacement arthroplasty): 발목관절 전치환술",
        "TSRA(Total shoulder replacement arthroplasty): 어깨관절 전치환술",
        "Bipolar: 고관절 반 인공관절 치환술",
        "AIBG(Autogenous iliac bone graft): 자가장골이식",
        "HTO(High tibial osteotomy ) :경골근위부절골술",
        "Bankart repair : 관절와순파열 복원술 (어깨)",
        "SLAP(Superior labrum from anterior to posteior)repair :상부관절와순파열 복원술(어깨)",
        "◈ OS 약어 ◈",
        "• A.C(Acromion Claviclar): 견봉쇄골",
        "• AFO(Ankle foot orthosis): 발목 고정술",
        "• AVN(Avascular necrosis): 무혈성 괴사증",
        "• CHD(Congenital hip dislocation): 선천성 고관절 탈구",
        "• CHS(Compression hip screw): 압박고 나사",
        "• CPM(Continuous passive movement): 지속적 수동운동",
        "• CTS(Carpal tunnel syndrome): 수근관 증후군",
        "• DJD(degenerative joint disease 퇴행성 관절질환",
        "• DDH(Development dislocation of hip): 발달성 고관절 탈구",
        "• DRX 견인치료",
        "• E/F(External fixation): 외부 고정장치",
        "• ECRB(extension carpi radialis brevis) 단요수근 신전"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 약어",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________2",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 약어 원문 검색 보강 2",
      "aliases": [
        "NS OS 약어 원문 검색 보강 2",
        "NS",
        "OS",
        "약어",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "• ESWT(Extracorporeal shock wave therapy) 체외충격파 치료",
        "• Fx.(Fracture): 골절",
        "• hemarthritis 다발성 관절염",
        "• LCPD(Leg calve perthes's disease): 대퇴골두 허혈성 괴사증",
        "• LM(Lateral meniscus) 측부 반월상 연골",
        "• MM(Medial meniscus) 내측 반월상 연골",
        "• MDS(Myelo dysplastic syndrome): 골수 이형성 증후군",
        "• OA(Osteoarthritis): 골관절염",
        "• OM(Osteomylitis): 골수염",
        "• QSE(Quadriceps setting muscle exercise): 대퇴사두근 연습",
        "• ROM(Range of motion): 운동범위",
        "• RA(Rheumatoid arthritis): 류마티스 관절염",
        "• RC(Rotator cuff): 회전근개",
        "• SBC(Simple bone cyst): 단순 골낭종",
        "• SLAP(superior labrum anterior posterior lesion) 상순 전후 병변",
        "• SLRT(Straight leg raising test): 하지거상검사",
        "• spondylolisthesis 척추 전방 전위증",
        "• Spondylosis deformans 변형성 척추증",
        "• spondylarthritis 척추 관절염",
        "• spondylolysis 척추 분리증",
        "• TFCC(triangular fibroric cartilagenous complex) 삼각 섬유연골 복합체",
        "• TPI(Tender Point Inject) 근막 동통 유발적 주사",
        "◈ Blcok 종류 ◈",
        "CSEB(cervical spine epidural block) 경추경막 외강 신경차단술",
        "MBB(medial branch block): 내측 신경 가지 차단술",
        "LSEB(Lumbar spine epidural block) 요추경막 외강 신경차단술",
        "STEB(selective transforaminal epidural block) 선택적 경추간 공경막외 신경차단술",
        "Root block: 신경근 차단술",
        "Trigeminal nerve block: 삼차신경 차단술",
        "Peripheral nerve block: 말초신경 차단술",
        "caudal block: 미추 신경공 차단술",
        "LFNB(Lateral femoral cutaneous nerve block)",
        "SGB(Sympathetic ganglion block)",
        "ATNB(Auricular temporal nerve block)",
        "SONB(Superior orbital nerve block)",
        "IONB(Inferior orbital nerve block)",
        "STNB(Superior trochlear nerve block)",
        "SSNB(Supra scarpular nerve block)",
        "PTNB(Posterior tibial nerve block)",
        "KIB(Knee injection block)",
        "SIB(Shoulder injection block)",
        "Piriformis block 이상근 부위 신경차단술",
        "Prolotherapy 증식요법"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 약어",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 약어"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS___________1",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 알아야할 사항들 원문 검색 보강 1",
      "aliases": [
        "NS OS 알아야할 사항들 원문 검색 보강 1",
        "NS",
        "OS",
        "알아야할",
        "사항들",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "< NS / OS 꼭 알아야 할 사항 >",
        "NS 환자 주말 처방은 카톡에 주말 오더방(당직과장)에서 받으면 되고, OS는 전담(pop up에 뜨는)한테 받으면 됨",
        "외래 base 시술환자는 픽업 안받습니다. 시술전 처치표 필요 / 외래 간호기록지 차팅 / 내리기전 anti 주고 내리기",
        "NPT / PEN : ABR 2시간 NPO 4시간/ TBA : ABR 30분 NPO 4시간",
        "수술 가는 환자 꼭 바지 입혀보내기(ex 터진바지), 수술 갔다와서도 위아래 환자복 제대로 입히기",
        "수술전 처치표 작성시 완료 안된부분 형광펜으로 표시 후 완료 확인되면 수술방 내려주세요",
        "injection 시간 9am/3pm/9pm, anti는 6am/2pm,10pm",
        "포스테오, 인슐린 사용 시 하루 최대 WSCA 피하주사 fee 2개까지 가능",
        "RUEB402ICU - 단순초음파2 ICU 처방 fee",
        "(portable doppler, portable echo- 검사결과는 재진기록지로만 볼수있음. portable이라 검사결과에 안뜸)",
        "OR방 갈 때 dorsi set로 fluid 달고 가기 / 기저귀, 속옷, 네일, 보청기, 틀니 확인",
        "motor check 시 motor 0이라고 안함. foot drop으로 기록남기기",
        "op환자 BT 37.5 2일 이상 지속 시 RAT, PCR 나가기/ 38.0 이상 시 fever study 나가기",
        "post op v/s 1시간 뒤, 2시간 뒤. 6시간 뒤",
        "진료기록사본신청에서 진료확인서 = 수술기록지입니다.",
        "< H-vac, JP >",
        "OS1 -> H-vac(natural), JP(full)",
        "OS2 -> H-vac(full)",
        "OS3 -> H-vac(수술 당일 natural) POD#1 오전 회진 후 full",
        "OS7 -> H-vac(full)",
        "OS8 -> 퇴실 기준으로 1시간 H-vac clamping 이후 1/3 유지",
        "OS9 -> H-vac(full)",
        "OS Drain 양 많아도 보고 X / OS3 H-vac 500cc 이상 시 주치의 보고",
        "NS는 H/V full negative,",
        "NS jp Drain 50cc 이상시 주치의 보고, output 100cc 이상 시 CSF mix되는 지 확인",
        "(사진, headache, dizziness, fever, BP 확인하고 기록넣기)",
        "NS2 JP 빼고 MRI",
        "NS3 MRI 찍고 JP remove",
        "MRI H-vac 있으면 불가능",
        "H/V, JP remove 시 tip cx 처방 코드 : LZB4134 ordinary culture,",
        "Antibiotic sensitivity(Cath Tip)",
        "Gram stain(방법-tip 으로 변경) -->간호처방으로 가능, set처방 추가",
        "< OS >",
        "OS 8과는 전화로, OS1과는 톡으로 주말 아침 noty할거 있을 때.",
        "OS 1,8,9 POD#2일째 첫 Dx,H-vac 제거시까지 Dx 안함.H-vac 제거한날 Dx,EOD Dx",
        "OS 2,3,7 POD#2일째 첫 Dx후 EOD 시행",
        "OS 8) 에어매트리스 깔지말라해도 NS all 에어매트리스 깔기로!! 상관없음",
        "OS 전담이 동의서+ 그 외 카톡 퍼미션방",
        "OS 1과 OP day부터 크렉산 사용",
        "OS 1과 stocking 안함. DVT pump만 적용",
        "OS 1과 total hip, bipolar op환자 워커 + 모래주머니 수술계획표에 써놓기(보조기회사에 환자 직접 수납)",
        "OS spinal 마취 8시간 head down",
        "OS 7과는 splint가져오면 stocking X, DVT pump X",
        "< NS >",
        "NS19 6pm전에 수술 나오면 담날 아침부터 s.o.w-점심 미음- 저녁 죽/",
        "6pm이후 나오면 담날 점심부터 s.o.w –저녁 미음 – 담날 아침 죽",
        "NS37 POD#1 brain ct f/u 6-7am 에 로비층에서 검사",
        "NS34 chest 8:30에 꼭 찍어주세요(portable) 영상의학과 협조요청(+)",
        "NS34 진단서 펠로우 과장님이 작성함",
        "NS는 배액관 지속시든 제거시든 EOD Dx입니다",
        "NS2 당일 최소 8시간 NPO, 때때로 다를 수 있음.....",
        "동의서 NS 22,25,26 원장님 직접, 전담 없음(서브만)",
        "NS2 J-P 제거 시 tip있는 에디슨 포셉 준비하고,s-s 얇은거 준비해야 합니다",
        "NS2 J-P 제거 후에 MRI 해야하고, 제거한 날에 꼭 f/u해야합니다",
        "NS2 minor op, 60세이하 환자는 stocking 적용안함",
        "spinal 마취시에는 욕창 고위험으로 안하고 정상군으로 해주세요",
        "Duty 별 U/O 250cc 미만일경우 urine houry 하세요",
        "(EMR 서식지에 hourly check하고 듀티마다 I/O에 total양만 적어주세요)",
        "op 후 보조기 착용 하는사람 (hip brace는 OS1과만! OS8과는 처방에다 적어놓는다함)",
        "보조기업체 010-9262-1310 미리 전날 연락해서 전날 보조기 제작 +",
        "비급여 설명받고 차팅꼭 남겨주세요",
        "Cervical op는 dvt, 스타킹 X",
        "OS,NS 7번처방은 OR 처방이므로 픽업x",
        "NS는 배액관 지속시든 제거시든 EOD Dx입니다",
        "PCA remove시 v/s 메모칸에 써주면 보기 편할것 같아요. 언제 뺐는지 알수있으니.시간.",
        "Dressing PA가 할때 nylon 또는 vicryl로 suture했는지,steri-strip 했는지,dressing 제품 뭘로 했는지 등",
        "기록이랑 카덱스에 남겨주세요. 추후 stitch out(보통 14일) 여부등 확인해야하니까",
        "입원당시 동의서는 전담쌤이 받고 입원 후는 우리가 동의서 받음.",
        "(주치의 아이디로 로그인해서 동의서 출력)동의서 주치의 사인으로 되어있어야 합니다",
        "post icu return 시 보호자분께 문자 보내기",
        "(윌스기념병원입니다. ㅇㅇㅇ 님 수술이 종료되어 집중치료실로 이동 예정입니다.)",
        "> 익스플로어 즐겨찾기에 smspia.com 이용하세요)",
        "general 마취) 베개,head up, leg elevation 가능",
        "혈액요청서-OP,진단명,수혈경험 여부, 채혈자(이름 일치하게)",
        "일반병동환자 필터시린지 사용해주세요 bouls 2개까지 급여(ex 덱사,로이솔), IM 사용갯수대로 비급여 필터시린지 처방입력(IM 사용시 비급여 설명 후 필터시린지 사용함 차팅 넣어주세요)-나이트가 개수 일괄입력",
        "마약) 분홍색 종이에 있던 것 사용했으면 분홍색 종이에 다시 넣은 후 간호라벨에 선 긋고, 이름 적어주세요",
        "major OP 모니터링 POD#1 아침 회진때까지.''모니터링 이제 안할게요~''하고 끝내기",
        "burrhole 1주미만은 tip Cx 안함. 1주 이상 유지하다 remove시에는 tip Cx 나갑니다",
        "증식치료(프롤러(주사제이름), 스크램블러 비급여 설명해야합니다.(비급여 동의서 우리가 받음)",
        "전신마취 수술하는 남자환자는 수술전에 면도하기 (벤트할때 불편하다함)"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 알아야할 사항들",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 알아야할 사항들"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________1_2",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 1",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 1",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "湰灧",
        "70세 이상 환자: hs 멜라킹 서방정 2mg(melatonin)",
        "60세 이상: hs 멜라킹 서방정 2mg 또는 스틸녹스 CR정 6.25mg(zolpidem)",
        "60세 이하: hs 스틸녹스 CR정 6.25mg 또는 당직의 판단하에 처방",
        "스틸녹스 5mg 또는 스틸녹스 10mg",
        "55세 이상: 멜라킹 서방정 2mg/ 54세 이하: 스틸녹스 CR정",
        "PRBC 400(250), 320(200) FFP 400(150) 320(130) PC 400(50) 320(40)",
        "세파제돈 1.0g AST:POSITIVE-->세파졸린 1.0g * 3번 처방",
        "Bun/ creatinine 높을 때-->세파졸린 2.0g * 2번 처방",
        "<70세 이상>",
        "ABGA/PFT/BMD(Fx 환자는 필수)",
        "<50세 이상>",
        "Carotid doppler(carotid MRI 로 대체가능), TCD",
        "<40세 이상>",
        "TCD(Brain MRI로 대체가능), Echo",
        "<30세 이상>",
        "SONO/상,하지 doppler",
        "<20세 이상>",
        "심전도/lab/ chest x-ray/CT/PWV/ 동적체(incision 수술은 제외)/DITI/",
        "통증역치/ sEMG(Fx 환자는 제외)",
        "근전도-50세 이상 및 spinal stenosis 환자, cervical op 환자",
        "TFT(필요시)",
        "갑상선 질환 기왕력 환자가 전신마취로 수술할 경우 반드시 TFT 검사 진행!!!",
        "75세 이상 인지장애 검사 설명후 신청",
        "MR(enhance)--> 0.1cc/kg 최대 7.5cc",
        "CT(enhance)--> 2mg/kg, 100ml(한도내)",
        "강직성 척추염--> 외주) HLA-B27 유전자 검사 동의서 내려야함",
        "항CCP항체(IgG)- 정밀면역검사",
        "<OS8 Foot drop시 살론투여방법>",
        "살론125,g qid(3일) 살론 6시간 간격으로 주세요",
        "살론125mg tid(1일)",
        "살론125mg bid(1일)",
        "살론 125mg qd(1일)",
        "<Lantus 조절법 >",
        "130 이상--> 2u증량",
        "180 이하--> 4u or 6u증량",
        "70 이하--> 4u or 6u감량",
        "BMD 기준: 2 level에서 제일 낮은 수치 or femur에서 neck 수치!",
        "프롤리아 프리드리시린지 6개월 마다: T score –2.5",
        "이베니티 1개월마다 총 12회 : T score –2.5,",
        "65세이상 여성, , 골다공성 골절 2개",
        "칼슘제재 및 골다공증 약 3~4개월 복용",
        "◈ NS(신경외과) 정규 처방 ◈",
        "Major OP",
        "1. ALIF",
        "OP day",
        "POD #1~2",
        "POD #3",
        "POD#4-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "로이솔 1@ TID",
        "모틴1vial + NS100 BID",
        "크렉산40 sc*1(POD#2~)",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "경구약",
        "pre) 카발린 75mg",
        "아데만, 엑소페린, 파모티딘, 라시도필,",
        "마그밀 1T씩 BID"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________2_2",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 2",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 2",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "POD#7~ T/S/O : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "POD#1 Chest PA",
        "POD#3",
        "> L-spine MRI",
        "> L-spine AP/Lat",
        "> vein doppler f/u",
        "POD#6",
        "L-spine AL/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "POST CBC,",
        "항혈전스타킹",
        "DVT PUMP, EKG,",
        "POD#1",
        "CBC, ESR, CRP",
        "electrolyte(Na&K&cl)",
        "UA",
        "POD#3",
        "CBC",
        "E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT Bun/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "▶ 당뇨환자일 경우 5DS1L,5DW1L 대신 NS 1L,",
        "멀티플렉스 1.1L + 휴물린알 20단위",
        "▶ Fever, ESR/CRP 상승, oozing 기타등등 환자 컨디션 따라 3세대 항생제 세프키존으로 변경될 수 있음",
        "▶ 40세 이상 POD #2~8 까지 크렉산주 40mg S.C 투여 (JP 제거후부터)",
        "40세 이상 수술전 Vit D 투여함",
        "▶ 크렉산 종료후 POD#9~15 아스피린 1T QD 7일간",
        "▶ 통증의 양상에 따라 아이알코돈, 마이폴, 뉴가바캡슐 (100mg/300mg), 트리마셋, 뮤로다제, 알프람,",
        "등등 변경 및 추가 가능",
        "▶ 전날 반드시 미음!!! // Gas out후 SOW-미음-죽",
        "▶ NS3) 2-1 콤비플렉스 페리주 1440 2-2 H/S 1O00",
        "AAP, 엑소페린, 파모티딘, 라시도필, 마그밀 1T씩 BID",
        "PCA 소진후 아이알 코돈 0.5->1T QID 추가",
        "POD#7 H/S/O, POD#8~10 T/S/O",
        "◈ NS(신경외과) 정규 처방 ◈",
        "2. PLIF,PTLIF,DLIF,PLF,ITF,corpectomy",
        "OP day",
        "POD #1~2",
        "POD #3",
        "POD#4-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "②멀티플렉스페리주1.1L",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ BID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ TID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "(JP 양상 확인후)",
        "세파제돈1.0g BID",
        "크렉산40 sc*1",
        "경구약",
        "pre) 카발린 75mg",
        "아데만, 엑소페린, 파모티딘, 메디락에스, 마그밀 1T씩 BID",
        "POD#7~ T/S/O : 메섹신캅셀500mg 2cap씩 TID"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________3",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 3",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 3",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "방사선",
        "POD#1 Chest PA",
        "POD#3",
        "> L-spine MRI",
        "> L-spine AP/Lat",
        "POD#6",
        "L-spine AL/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "POST CBC,",
        "항혈전스타킹",
        "DVT PUMP, EKG,",
        "POD#1",
        "CBC, ESR,CRP",
        "electrolyte(Na&K&cl)",
        "UA",
        "POD#3",
        "CBC",
        "E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT Bun/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "▶ 당뇨환자일 경우 5DS1L,5DW1L 대신 NS 1L",
        "멀티플렉스 1.1L + 휴물린알 20단위",
        "▶ Fever, ESR/CRP 상승, oozing 기타등등 환자 컨디션 따라 3세대 항생제 세프키존으로 변경될 수 있음",
        "▶ 40세 이상 POD #3~8 까지 크렉산주 40mg S.C 투여 (JP 제거후부터)",
        "▶ 크렉산 종료후 POD#9~15 아스피린 1T QD 7일간",
        "▶ 통증의 양상에 따라 아이알코돈, 마이폴, 뉴가바캡슐 (100mg/300mg), 트리마셋, 뮤로다제,",
        "알프람, 등등 변경 및 추가 가능",
        "▶ 18시 이전(아침부터) SOW-미음-죽 18시 이후(점심부터) 금식-SOW-미음",
        "▶ NS3) 트라미펜, 엑소페린, 파모티딘, 라시도필, 마그밀 1T씩 BID",
        "PCA 소진후 아이알 코돈 0.5->1T QID 추가 IRCD은 POD#7 이후 저니스타1T",
        "POD#7 H/S/O, POD#8~10 T/S/O",
        "▶ 60세 이상 허리 FUSION POD#2 V-D",
        "◈ NS(신경외과) 정규 처방 ◈",
        "Major OP",
        "3. Cervical(laminoplasty, corpectomy, ACDF, Foraminotomy, TDR)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ BID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "로이솔 1@ BID",
        "보트로파제 1@ TID",
        "모틴1vial + NS100 BID",
        "세파제돈1.0g BID",
        "보트로파제 1@ TID",
        "세파제돈1.0g BID",
        "경구약",
        "A-K brace",
        "수술실내리기",
        "트리돌, 엑소페린, 라니빅에스, 메디락에스 마그밀 1T씩 BID",
        "POD#7~ T/S/O : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "Chest PA",
        "C-spine AP/Lat"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________4",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 4",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 4",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "C-spine MRI",
        "POD#6",
        "C-spine AP/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "EKG, I/O 체크",
        "POD#1",
        "CBC,ESR,CRP",
        "electrolyte(Na&K&cl)",
        "POD#3",
        "CBC, E/C",
        "POD#7",
        "CBC, E/C, electrolyte,",
        "LFT5 (OT/PT Bun/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "▶ Laminplasty 환자의 경위 wd 벌어지지 않도록 예방위해 보행시 팔자붕대 적용(NS2 제외)",
        "▶ 수술시 앞쪽으로 접근하는 TDR & ACDF: 조직의 부종 및 혈종으로 인한 호흡장애여부 확인",
        "(PCA X) --> 숨찬감, 답답함 정도, 허스키한 목소리 확인",
        "▶ 수술시 뒤쪽으로 접근하는 Foraminotomy & Laminoplasty : traction 고정으로 인해",
        "scalp suture 있는지 확인(head pin)",
        "> foraminotomy 는 반드시 head pin 이 있음// NS19 head pin x",
        "▶ NS9 – Cervical 경우 pre) 살론 250mg(2앰플) injection 투여! + 모틴: 주치의확인필요",
        "NS3 – TDR/ACDF 경우 덱사1앰플 prep 해서 OR",
        "▶ Anterior Cervical OP 는 무조건 carotid MRI 촬영필요- 조영제 동의서 받기!(Rt arm 18G)",
        "▶ TDR 환자는 POST C-MRI 진행 안함",
        "▶wd 앞(TDR & ACDF)- SOW-미음-죽",
        "▶wd 뒤(Lamino, forami)-죽-밥-밥",
        "◈ NS(신경외과) 정규 처방 ◈",
        "MINOR OP",
        "1. MD,LF,MF,LP(현미경하 디스크절제술)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g QD",
        "로이솔 1@QD",
        "보트로파제 1@ BID",
        "모틴 + NS100",
        "세파제돈1.0g QD",
        "(지속여부 확인)",
        "보트로파제 1@ TID",
        "보트로파제 1@ TID",
        "경구약",
        "아덴만, 엑소페린, 라니빅에스, 메디락에스, 마그밀 1T씩 BID",
        "NS3) 클린자 CR, 파모티딘, 라시도필, 마그밀->",
        "AAP, 파모티딘, 라시도필, 마그밀 아이알코돈 5mg",
        "방사선",
        "L-spine MRI",
        "L-spine AP/Lat",
        "POD#5",
        "L-spine AP/Lat",
        "Dynamic sEMG",
        "(수술전 진행한 사람에 한해서)",
        "LAB",
        "60세이상",
        "혈전스타킹 착용",
        "죽-밥-밥",
        "JP제거여부 확인",
        "POD#5",
        "CBC, E/C",
        "▶ NS7 (이동근원장님)- 환자가 퇴원할 때 직접소독하면서 sterile strip 제거함",
        "▶ 흉추(thoracic) 수술 시 당연히 T-spine 촬영"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________5",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 5",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 5",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "▶ MD, LF(MIS2) -> OP day 만 로이솔1@ BID, 모틴 QD : general anethesia 일 경우",
        "▶POD#1 일째 lab 확인후 anti d/c 확인",
        "2. PEID.PELD.MED(경피적 내시경하 디스크절제술)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+ 마로비벤 2@",
        "② N/S 500cc",
        "① 5DS 1L",
        "+ 마토크 1@",
        "+마로비벤 2@",
        "② N/S 500cc",
        "주사",
        "세파제돈1.0g QD",
        "세파제돈1.0g BID",
        "경구약",
        "아덴만, 엑소페린, 라니빅에스, 메디락에스 마그밀 1T씩 BID",
        "POD#2~ POD#4 : 메섹신캅셀500mg 2cap씩 TID->POD#5 일째 d/c",
        "방사선",
        "POST",
        "L-spine SED MRI",
        "(POST MRI)",
        "POD#5",
        "Dynamic sEMG",
        "(수술전 진행한 사람에",
        "한해서)",
        "LAB",
        "POD#5",
        "CBC, E/C",
        "▶ PEID는 MRI를 POD#2 일째 촬영",
        "▶ PELD & PEID(MIS) 는 MRI를 POD#1 일째 촬영",
        "▶ 흉추(thoracic) 수술 시 당연히 T-spine 촬영",
        "3. PVA- on ser 2주후",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3",
        "수액",
        "DBM 사용하는 환자",
        "① N/S 500",
        "② 데카민 250",
        "DBM 사용하지 X 환자",
        "5DS 1L, + KCL 20meq",
        "NS500",
        "주사",
        "세파제돈1.0g QD",
        "경구약",
        "아덴만(클린자CR) 엑소페린, 파모티딘, 메디락에스 마그밀 1T씩 BID- 저녁식후부터",
        "POD#1 : 아스피린 100mg 1t 추가, 시너젯ER 세미, 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "Chest AP",
        "L-spine AP/Lat",
        "L-spine MRI",
        "BMD기준이 안되는 환자(DBM 1cc 사용하여 진행시 V-D 시행)",
        "▶ 퇴원후 POD#7 일째 본드 또는 steril strip 외래에서나 집에서 자연제거",
        "▶ POD #1일째부터 아스피린 1t QD 시작(단 자가 항혈전제 있는경우는 자가약으로 복용)",
        "▶ 흉추(thoracic) 수술 시 당연히 T-spine 촬영",
        "▶ 모든 PVA 환자는 VIt D 투여 & 항혈전제스타킹 착용! &TLSO brace",
        "▶ 여자- Foley 가지고 있음. 남자- Foley 거의 안함",
        "◈ NS(신경외과) 정규 처방 ◈",
        "시술",
        "1. TBA/ PEN (22G angio 가능)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3-6",
        "수액",
        "5DS 1L",
        "주사"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________6",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 6",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 6",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "세파제돈1.0g QD",
        "(시술전 병동투여)",
        "경구약",
        "아덴만, 엑소페린, 파모티딘 1T씩 BID",
        "▶ 시술전 병동에서 세파제돈 1g IV 투여 후 시술진행",
        "▶ TBA: 시술후 30분 ABR 하고 퇴원 & 시술 4시간전 NPO",
        "▶ PEN 2시간 ABR",
        "2. Neucleoplasty (18G angio 필요)",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3",
        "수액",
        "5DS 1L",
        "주사",
        "세파제돈1.0g BID",
        "경구약",
        "아덴만, 엑소페린, 파모티딘 1T씩 BID",
        "POD#2 ~ POD#4 : 메섹신캅셀500mg 2cap씩 TID",
        "방사선",
        "POST MRI 촬영 안함",
        "▶ 시술전 병동에서 세파제돈 1g IV 투여 후 시술진행",
        "▶ 시술후 2시간 ABR 하고 퇴원 & 시술 4시간전 NPO",
        "◈ OS(정형외과) 정규 처방 ◈",
        "Major OP-1.TKRA/THRA",
        "OP day",
        "POD #1~2",
        "POD #3~5",
        "POD#6~",
        "수액",
        "① 플라즈마 솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "① 플라즈마 솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "POD#3",
        "①플라즈마 솔루션 1L",
        "마로비벤",
        "주사",
        "세파제돈 1 vial BID",
        "세파제돈 1 vial BID",
        "POD#5일까지",
        ">세파제돈 1 vial BID",
        "페니마돌 1@ BID",
        "POD#7일까지",
        ">페니마돌 1@ BID",
        "경구약",
        "자렐토10mg",
        "> 수술 후 6~8시간 후",
        "단, OS8) AAP 2T",
        "OS1 ->트레스탄, 시너젯ET, 메디락에스, 마그밀,가스티안, 엔테론",
        "OS2 ->트레스탄, AAP2T, 메디락에스, 마그밀,가스티안, 엔테론",
        "OS3 ->트레스탄, 아데만, 메디락에스 마그밀,가스티안, 엔테론(마이폴 추가)",
        "OS7 ->트레스탄, 쎄레브이200, 메디락에스 마그밀,가스티안, 엔테론",
        "OS8 ->트레스탄, AAP1T, 메디락에스, 가스티안(프로맥)",
        "OS9 ->트레스탄, 쎄레브이200, 메디락에스, 마그밀, 가스티안, 트리돌, 엔테론",
        "공통 만60세 이상만 투여 -> 자렐토10mg (TKRA : OP day 포함 POD#13일까지,",
        "THRA : Op day 포함 POD#34일까지 투여)",
        "방사선",
        "특수검사",
        "Knee AP/Lat",
        "Pelvis AP",
        "POD#2 Chest PA",
        "POD#4 Vein doppler f/u",
        "(OS8 POD#6 V-D)",
        "POD#5 sEMG f/u",
        "(Fx 환자 제외)",
        "POD #10",
        "> T/S/O 후",
        "Knee AP/LAT,",
        "lower extremity",
        "scanogram,",
        "Pelvis AP",
        "LAB",
        "OS8) post CBC",
        "OS8만!) 수술후"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________7",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 7",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 7",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "1시간지나서 clamp 된 H/V open 후 1/3 pressure 유지!",
        "도고스타킹, DVT PUMP적용!",
        "POD#1",
        "CBC, electrolyte(NA&K&CL)",
        "UA",
        "POD#2",
        "CBC, E/C, electrolyte,",
        "LFT5 (OT/PT BUN/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#5 CBC, E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT BUN/CR",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#10",
        "CBC, E/C",
        "▶ OS1(비모보, 카발린50 : 수술 1시간 전) OS2(세레브이200 : 수술 1시간 전)",
        "OS3(세레브이200, 카발린50) OS7(세레브이200) OS8: 무, OS9(비모보, 카발린50mg 수술 1시간전)",
        "▶ 자렐토 기준이 안되는 환자 -> POD1~7일까지 크렉산 40mg QD 투여, 그 후 아스피린 1T 으로 변경 투여",
        "59세 이하 UKA &bipolar-> 혈전예방위해 자렐토 기준 안되어 POD#1 크렉산 투여함",
        "▶ TKRA POD#2 일부터 CPM start, POD#7 도수치료",
        "▶ OS1-->H/V natural & JP full pressure 유지! // POD#5 H/V 제거!",
        "OS3-->수술당일 H/V natural 유지! & POD#1 Full Pressure 유지!",
        "POD#2 H/V 무조건 제거!",
        "OS7-->H/V full pressure & POD#2 300 이상일 때 노티후 H/V 제거!",
        "OS8-->TKRA--> POD#3 H/V claming 2회 후 H/V 제거: 주치의 확인",
        "THRA--> POD#3~4 H/V clamping 1회 후 H/V 제거: 주치의 확인",
        "OS9--> 수술당일 H/V natural & POD#1 H/V full pressure 유지!",
        "▶ 수술 후 통증 호소시 첫 페치딘은 12.5mg 으로 투여하고 부작용 관찰되지 않을시 25mg 으로 준다.",
        "▶ DVT 환자 경우- 아픽사반 10mg bid 1주 + 아픽사반 5mg 11주 = 12주",
        "Major OP- 2. TSRA / TARA / Bipolar",
        "OP day",
        "POD #1~2",
        "POD #3~5",
        "POD#6~",
        "수액",
        "① 플라즈마 솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "①플라즈마솔루션 1L",
        "마로비벤2@+ KCL 20meq",
        "② 멀티플렉스페리주1.1L",
        "POD#3",
        "① 플라즈마 솔루션 1L",
        "마로비벤 2@+KCL 20mEq",
        "주사",
        "세파제돈 1 vial BID",
        "세파제돈 1 vial BID",
        "페니마돌 1@ BID",
        "크렉산 40mg QD",
        "(bipolar 만!)",
        "POD#5일까지",
        ">세파제돈 1 vial BID",
        "페니마돌 1@ BID",
        "크렉산 40mg QD",
        "(bipolar 만!)",
        "POD#7일까지",
        ">페니마돌 1@ BID",
        "크렉산 40mg QD",
        "(bipolar 만!)",
        "경구약",
        "OS1 ->시너젯ER세미",
        "OS2. OS3. OS5 ->세레브이 , 트리돌",
        "공통 ->트레스탄, 마그밀, 메디락 에스 통증 호소하면 아이알코돈 추가 가능",
        "POD#8 ~ 아스피린 1T QD",
        "방사선",
        "특수검사",
        "Shoulder AP",
        "Ankle AP/Lat",
        "Pelvis AP",
        "POD#2 Chest PA",
        "POD #10",
        "> T/S/O 후",
        "X-ray f/u",
        "LAB"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________8",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 8",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 8",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "POD#1",
        "CBC,electrolyte(NA&K&CL) UA",
        "POD#2",
        "CBC,E/C, electrolyte,",
        "LFT5 (OT/PT BUN/Cr",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#5 CBC, E/C",
        "POD#7",
        "CBC, E/C,",
        "electrolyte, LFT5",
        "(OT/PT BUN/CR",
        "당정량 랜덤)",
        "총단백, 알부민",
        "POD#10",
        "CBC, E/C",
        "▶ OS1(비모보, 카발린50 : 수술 1시간 전)",
        "OS2(세레브이200 : 수술 1시간 전) OS3(세레브이200, 카발린50) OS7(세레브이200)",
        "OS8: 무, OS9(세레브이200)",
        "▶ TSRA(OS1,OS3,OS5) -> POD#2 일부터 CPM 시작",
        "▶ TSRA 환자가 general anethesia 할 경우 post~pod#1 로이솔, 모틴 추가함",
        "▶ 당뇨환자일 경우",
        "1) 5DS1L,5DW1L 대신 NS 1L",
        "2) 멀티플렉스 1.1L + 휴물린알 20단위",
        "▶ OS1-->H/V natural 유지!",
        "OS3-->H/V Full Pressure 유지!",
        "◈ OS(정형외과) 정규 처방 ◈",
        "Minor OP",
        "1. 절개가 있는 경우 (A/S HTO, A/S ACL(PCL) recon, MBO, LM repair, H-V, OR IF 등 )",
        "OP day",
        "POD #1",
        "POD #2",
        "POD#3~",
        "수액",
        "플라즈마 1L + 마로비벤2@",
        "플라즈마 1L + 마로비벤2@",
        "NS500",
        "(IV PCA 소진후 제거용)",
        "주사",
        "세파제돈 1 vial BID",
        "페니마돌 1@ BID(PRN)",
        "세파제돈 1 vial BID 또는",
        "anti d/c!!!",
        "페니마돌 1@ BID",
        "경구약",
        "OS1 ->비모보, 뮤로다제",
        "OS2. OS3. OS5 ->아덴만, 뮤로다제, 이토메드",
        "OS1. OS2. OS5 (knee) -> 신바로",
        "공통 - 라시도필, 통증 호소하면 아덴만, 아이알코돈 추가 가능",
        "방사선",
        "POST X-ray",
        "퇴원 시 X-Ray f/u",
        "LAB",
        "POD#4 or 5",
        "CBC, E/C",
        "▶ HTO, ACL(PCL), LM T/P",
        "OS1(비모보, 카발린50 : 수술 1시간 전)",
        "OS2(세레브이200 : 수술 1시간 전) OS3(세레브이200, 카발린50) OS7(세레브이200)",
        "OS8: 무, OS9(세레브이200)",
        "▶ 당뇨환자일 경우 -> 5DS1L,5DW1L 대신 NS 1L",
        "▶ A/S ACL recon POD#2부터 CPM 시작 (OS2 안함)",
        "▶ A/S PCL recon -> CPM 금지",
        "▶ A/S HTO -> 주치의에 따라 CPM 금지",
        "▶ 카티스템(줄기세포) -> 나이상관 x, 비용 800, OS1) OS3) steroid, NASID 금기!",
        "카트리젠(콜라겐-텐토리젠) -> 15~50세, 비용 200, 금기약은 확인후!",
        "HTO 후 모든과 HTO brace 착용함 // OS7--> Donjoy brace & MCL brace",
        "MM repair & chondroplasty--> donjoy brace",
        "◈ OS(정형외과) 정규 처방 ◈",
        "Minor OP",
        "2. 절개가 없는 경우 (단순 Knee(Shoulder) A/S & repair, A/S Knee Chondroplasty, CTR, CR IF 등)",
        "OP day",
        "POD #1",
        "POD #2~",
        "수액",
        "플라즈마 1L + 마로비벤2@",
        "플라즈마 + 마로비벤2@",
        "주사",
        "세파제돈 1 vial BID"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    },
    {
      "id": "UPD43_NS_OS_________9",
      "category": "업로드 원문 / 검색 보강",
      "title": "NS OS 메뉴얼 원문 검색 보강 9",
      "aliases": [
        "NS OS 메뉴얼 원문 검색 보강 9",
        "NS",
        "OS",
        "메뉴얼",
        "원문",
        "검색",
        "보강",
        "업로드 매뉴얼",
        "검색보강"
      ],
      "urgency": "archive",
      "summary": "원문 보관용 카드입니다. 일반 검색에서는 핵심 카드와 이미지 카드를 먼저 확인하세요.",
      "indications": [],
      "preparation": [],
      "steps": [
        "페니마돌 1@ BID",
        "세파제돈 1 vial BID 또는",
        "anti d/c !!!",
        "페니마돌 1@ BID",
        "경구약",
        "OS1 ->비모보, 뮤로다제",
        "OS2. OS3. OS5 ->아덴만, 뮤로다제, 이토메드",
        "OS1. OS2. OS5 (knee) -> 신바로",
        "공통 - 메디락에스, 통증 호소하면 트리돌, 아이알코돈 추가 가능",
        "방사선",
        "특수검사",
        "POST X-Ray",
        "(단순 A/S 제외)",
        "Shoulder AP",
        "Scapular Lat",
        "POD#2",
        "Shoulder A/S (dx 후) -> Double sequence MRI",
        "Knee A/S-> sEMG f/u (Fx 환자 제외)",
        "▶ Shoulder A/S (수술 한시간 전)",
        "OS1(비모보, 카발린50 : 수술 1시간 전)",
        "OS2(세레브이200 : 수술 1시간 전) OS3(세레브이200, 카발린50) OS7(세레브이200) OS8: 무, OS9(세레브이200)",
        "▶ Shoulder A/S -> POD#1부터 CPM 시작",
        "▶ Repair Bankart shoulder --> cpm 안함",
        "▶ 당뇨환자일 경우 -> 5DS1L, 5DW1L 대신 NS 1L"
      ],
      "dosage_or_mix": [],
      "orders_or_emr": [],
      "charting": [],
      "io": [],
      "warnings": [
        "담당의 지시와 병원 최신 프로토콜 우선",
        "업로드된 추가 매뉴얼 원문 기준으로 재확인"
      ],
      "related": [],
      "tags": [
        "업로드 원문 / 검색 보강",
        "v43_uploaded_manual",
        "NS OS 메뉴얼",
        "원문보관"
      ],
      "review": {
        "status": "uploaded_manual_added",
        "rule": "업로드 HWP 자료 기반 신규/보강 카드"
      },
      "source_refs": [
        "NS OS 메뉴얼"
      ],
      "tables": [],
      "images": []
    }
  ],
  "final_review_note": {
    "card_count": 71,
    "review_policy": [
      "원본에서 확인되는 내용만 유지",
      "OJT 평가표, 서명란, 점수표, 프리셉터/프리셉티 문구 제거",
      "중복되는 자동 추출 카드 제거",
      "약물/응급/CRRT/수혈은 추측 없이 출처 확인 내용만 반영",
      "실무 검색어 alias 추가",
      "실제 처치/투약은 담당의 지시와 병원 최신 프로토콜 우선 문구 유지"
    ],
    "excluded": [
      "원본 일부가 표 형태로 잘려 의미가 불명확한 조각",
      "개인정보/계정/비밀번호 등 민감정보 가능 항목",
      "평가용 문항 중 실무 검색 가치가 낮은 항목"
    ]
  },
  "v10_master_update": {
    "added_from_user_master_categories": true,
    "final_card_count": 128,
    "added_categories": [
      "Routine job 세부",
      "입퇴원/전동/전원/사망",
      "지참약",
      "마약/향정",
      "간호기록",
      "처방/액팅",
      "DNR",
      "수혈",
      "유효기간",
      "수술 전후",
      "Dressing",
      "CRRT",
      "CPR",
      "검사/수술/시술",
      "EKG",
      "검체",
      "약물 mix",
      "Intubation",
      "Ventilator",
      "원내 전화번호",
      "Infusion/Syringe pump",
      "경구혈당강하제",
      "E-cart 응급약물",
      "동의서",
      "각과 Routine",
      "DKA",
      "BST sliding",
      "DIC",
      "EMR 카멜레온",
      "장비 사용법"
    ],
    "important_note": "내선번호, 각과 원장님별 세부 routine, 병원별 BST/DKA/DIC 세부 수치 등은 병원 최신 자료로 추가 보완 필요."
  },
  "v11_source_enhanced": {
    "note": "사용자가 지적한 원본 포함 항목을 실제 문서 내용 기반으로 보강/교체",
    "card_count": 128,
    "enhanced_cards": [
      "Night routine 상세",
      "제세동기 점검",
      "Lab bottle 종류와 채혈 순서",
      "DKA protocol",
      "RI sliding",
      "DIC",
      "CRRT Return",
      "수혈 절차",
      "동의서 종류",
      "원내 내선번호"
    ]
  },
  "v14_update": {
    "summary": "V11 기반. 윌스 심볼 첫화면 제거. 요청한 첫화면 실무 메뉴, 메뉴 클릭 활성화, 검색어 alias 확장 적용.",
    "card_count": 147
  },
  "v24_update": {
    "summary": "실무 메뉴에서 자주 찾는 검색 삭제, 카드 상세창 표/그림 표시 기능 추가, 주요 카드 표 데이터 추가",
    "card_count": 146,
    "media_support": {
      "tables": "card.tables 배열이 있으면 상세창에 표로 표시",
      "images": "card.images 배열에 src/alt/caption을 넣으면 상세창에 그림 표시"
    }
  },
  "v25_update": {
    "summary": "실무 메뉴 항목에서 자주 찾는 검색 삭제 재확인",
    "card_count": 146
  },
  "v26_update": {
    "summary": "업로드한 업무 매뉴얼 내용을 사이트 검색 DB에 추가하고 주요 표를 카드 상세에 표시",
    "added_manual_cards": [
      "ICU 입원 시 절차",
      "Infusion pump",
      "ICU 교체주기",
      "투약/Feeding 시간",
      "상황별 준비물",
      "항생제 AST",
      "검체통/ABGA",
      "식이",
      "Initial 후 전산",
      "I/O 상세",
      "부착기구",
      "지참약",
      "마약/향정 상세",
      "간호기록",
      "간호처방/액팅",
      "DNR",
      "EKG",
      "Injection tip",
      "수혈 tip",
      "입퇴원/전동/전원",
      "ICU 숙지사항",
      "CPR 실무",
      "영상검사",
      "Dressing",
      "수술 전후",
      "CRRT 상세",
      "신경외과 시술"
    ],
    "card_count": 173
  },
  "v27_update": {
    "summary": "V24의 표/그림 표시 기능을 유지한 상태로 V26 업로드 매뉴얼 DB 추가본에 적용",
    "features": [
      "검색 결과 카드 상세에서 tables 배열 렌더링 유지",
      "검색 결과 카드 상세에서 images 배열 렌더링 유지",
      "V26 신규/보강 카드에 표 데이터 유지",
      "향후 이미지 자료를 DB images 필드에 추가하면 그대로 카드에 표시 가능"
    ],
    "cards_with_tables": 21,
    "cards_with_images": 0
  },
  "v29_update": {
    "summary": "GitHub 웹 업로드 시 이미지 폴더가 풀려도 작동하도록 이미지를 public 루트에 배치하고 DB 이미지 경로를 수정",
    "json_validated": true,
    "image_path_mode": "public root, e.g. bin0001.png"
  },
  "v43_update": {
    "description": "추가 업로드 HWP 5종의 텍스트, 표 형태 내용, 추출 이미지/그림을 검색 카드로 보강",
    "source_files": [
      "추가 업무 매뉴얼(260618).hwp",
      "기관절개관.hwp",
      "NS OS 약어.hwp",
      "NS OS 알아야할 사항들.hwp",
      "NS OS 메뉴얼.hwp"
    ],
    "added_cards": 63,
    "total_cards": 236,
    "extracted_images": 100
  },
  "v44_update": {
    "description": "AI API 오류 시에도 매뉴얼 기반 요약 답변을 표시하고, 업로드 HWP 이미지가 관련 핵심 카드에 직접 보이도록 개선",
    "attached_images_to_core_cards": true,
    "raw_text_cards_demoted": true,
    "ai_fallback_enabled": true,
    "total_cards": 236
  },
  "v45_update": {
    "description": "새로 업로드한 HWP에서 추출된 이미지/그림 갤러리와 이미지 연결을 제거하고, 기존 매뉴얼 그림/표/이미지는 유지",
    "removed_gallery_cards": 9,
    "removed_uploaded_image_references": 106,
    "removed_uploaded_manual_images_folder": true,
    "total_cards_before": 236,
    "total_cards_after": 227
  },
  "v46_update": {
    "description": "사용자 검색 후 카드 상세 화면을 카드 제목/검색어/언제 보는 카드/준비물/핵심 절차/주의사항/기록 포인트/관련 카드/출처 기준 구조로 통일. 기존 표·이미지·사진 기능 유지.",
    "structured_detail_view": true,
    "tables_images_kept": true
  },
  "v47_update": {
    "description": "AI답변/카드검색 버튼 먹통 방지: app/data 캐시 버전 갱신, service worker 캐시 해제, 버튼 type=button 및 안전한 이벤트 바인딩 적용. V46 카드 표준 구조와 표/이미지 기능 유지.",
    "cache_busting": true,
    "safe_button_binding": true,
    "structured_card_view_kept": true
  }
};
