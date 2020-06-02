const levels = [
        {
            "id" : 1,
            "name" : "ปฏิบัติงาน",
            "description" : "ปฏิบัติงาน"
        },
        {
            "id" : 2,
            "name" : "ชำนาญงาน",
            "description" : "ชำนาญงาน"
        },
        {
            "id" : 3,
            "name" : "อาวุโส",
            "description" : "อาวุโส"
        },
        {
            "id" : 4,
            "name" : "ปฏิบัติการ",
            "description" : "ปฏิบัติการ"
        },
        {
            "id" : 5,
            "name" : "ชำนาญการ",
            "description" : "ชำนาญการ"
        },
        {
            "id" : 6,
            "name" : "ชำนาญการพิเศษ",
            "description" : "ชำนาญการพิเศษ"
        },
        {
            "id" : 7,
            "name" : "เชี่ยวชาญ",
            "description" : "เชี่ยวชาญ"
        },
        {
            "id" : 8,
            "name" : "ต้น",
            "description" : "อำนวยการต้น"
        },
        {
            "id" : 9,
            "name" : "สูง",
            "description" : "อำนวยการสูง"
        },
        {
            "id" : 10,
            "name" : "ต้น",
            "description" : "บริหารต้น"
        },
        {
            "id" : 11,
            "name" : "สูง",
            "description" : "บริหารสูง"
        }
    ]

const positions = [
        {
            "id" : 1,
            "name" : "ผู้ตรวจราชการ",
            "position_type_id" : 1
        },
        {
            "id" : 2,
            "name" : "ผู้ช่วยเลขขาธิการสำนักงานศาลยุติธรรม",
            "position_type_id" : 1
        },
        {
            "id" : 3,
            "name" : "ผู้อำนวยการ",
            "position_type_id" : 2
        },
        {
            "id" : 4,
            "name" : "เจ้าพนักงานศาลยุติธรรม",
            "position_type_id" : 3
        },
        {
            "id" : 5,
            "name" : "เจ้าพนักงานคดี",
            "position_type_id" : 3
        },
        {
            "id" : 6,
            "name" : "นักวิเทศสัมพันธ์",
            "position_type_id" : 3
        },
        {
            "id" : 7,
            "name" : "นักวิชาการพัสดุ",
            "position_type_id" : 3
        },
        {
            "id" : 8,
            "name" : "นักวิเคราะห์นโยบายและแผน",
            "position_type_id" : 3
        },
        {
            "id" : 9,
            "name" : "บรรณารักษ์",
            "position_type_id" : 3
        },
        {
            "id" : 10,
            "name" : "นักวิชาการเงินและบัญชี",
            "position_type_id" : 3
        },
        {
            "id" : 11,
            "name" : "นักทรัพยาการบุคคล",
            "position_type_id" : 3
        },
        {
            "id" : 12,
            "name" : "นักประชาสัมพันธ์",
            "position_type_id" : 3
        },
        {
            "id" : 13,
            "name" : "นักวิชาการตรวจสอบภายใน",
            "position_type_id" : 3
        },
        {
            "id" : 14,
            "name" : "นักวิชาการคอมพิวเตอร์",
            "position_type_id" : 3
        },
        {
            "id" : 15,
            "name" : "นิติกร",
            "position_type_id" : 3
        },
        {
            "id" : 16,
            "name" : "สถาปนิก",
            "position_type_id" : 3
        },
        {
            "id" : 17,
            "name" : "วิศวกรโยธา",
            "position_type_id" : 3
        },
        {
            "id" : 18,
            "name" : "นักจัดการงานทั่วไป",
            "position_type_id" : 3
        },
        {
            "id" : 19,
            "name" : "นักจิตวิทยา",
            "position_type_id" : 3
        },
        {
            "id" : 20,
            "name" : "วิศวกรไฟฟ้า",
            "position_type_id" : 3
        },
        {
            "id" : 21,
            "name" : "วิศวกรเครื่องกล",
            "position_type_id" : 3
        },
        {
            "id" : 22,
            "name" : "มัณฑนากร",
            "position_type_id" : 3
        },
        {
            "id" : 23,
            "name" : "เจ้าหน้าที่ศาลยุติธรรม",
            "position_type_id" : 4
        },
        {
            "id" : 24,
            "name" : "นายช่างศิลป์",
            "position_type_id" : 4
        },
        {
            "id" : 25,
            "name" : "เจ้าพนักงานธุรการ",
            "position_type_id" : 4
        },
        {
            "id" : 26,
            "name" : "นายช่างโยธา",
            "position_type_id" : 4
        },
        {
            "id" : 27,
            "name" : "เจ้าพนักงานโสตทัศนศึกษา",
            "position_type_id" : 4
        },
        {
            "id" : 28,
            "name" : "เจ้าพนักงานการเงินและบัญชี",
            "position_type_id" : 4
        },
        {
            "id" : 29,
            "name" : "เจ้าพนักงานการเงินและบัญชี",
            "position_type_id" : 4
        }
    ]
  
// get positions id
export const getPositionId = (positText)=>{
    let id = 0

    const pos = positions.find(p => positText.includes(p.name))
    if(pos != undefined){
        id = pos.id
    }

    return id
}

// get levels id
export const getLevelId = (positText)=>{
    let id = 0

    const pos = levels.find(l => positText.includes(l.name))
    if(pos != undefined){
        id = pos.id
    }

    return id
}
    
// name component
export const getNameComponent = (fullname) =>{

    const prefix = ['นาย','นางสาว','นาง']
    for(let i=0; i<prefix.length; i++){
        if(fullname.startsWith(prefix[i])){
            return {
                "title_name":prefix[i],
                "full_name": removeTextSpace(fullname.replace(prefix[i],'')),
                "gender": i == 0?1:2,
            }
        }
    }

    return {
        "title_name":'',
        "full_name": removeTextSpace(fullname),
        "gender":0,
    }
}

export const removeTextSpace = (text) => {
    let rmText = text
    if( rmText.length > 0 ){
        // trim
        rmText = rmText.trim()

        // remove space
        rmText = rmText.replace(/ +/g,' ')
    }

    return rmText
}
