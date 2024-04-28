// 系统数据枚举
enum WordsEnum {
  搜索 = 0,
  开始,
  重置
}
// 语言包
const dictionarys = {
  china: ['搜索', '开始', '重置'] as const,
  english: ['Search', 'Start', 'Reset'] as const,
  japanese: ['検索', '起動', 'リセット'] as const
}
export type Language = keyof typeof dictionarys
type Words = keyof typeof WordsEnum

/**
 *
 * @param language 语言
 * @returns 自动翻译的函数
 */
export const lang =
  <L extends Language>(language: L) =>
  <W extends Words>(word: W) =>
    dictionarys[language][WordsEnum[word]]

// export type Lan = ReturnType<typeof lang>

// 测试
const lan = lang('english')
const value = lan('重置')
console.log(value); // Reset

const lan1 = lang('japanese')
const value1 = lan1('重置')
console.log(value1); // リセット
