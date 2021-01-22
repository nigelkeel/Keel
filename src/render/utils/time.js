

// 获取yyyy-mm-dd的日期格式
// 参数：Date对象
export function getYYYYmmDD (date=new Date) {
  const y = date.getFullYear()
  const m = (date.getMonth()+1).toString().padStart(2, 0)
  const d = date.getDate().toString().padStart(2, 0)
  return `${y}-${m}-${d}`
} 