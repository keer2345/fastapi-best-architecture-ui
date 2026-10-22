/**
 * 雪花 ID 类型
 *
 * 后端 `DATABASE_PK_MODE=snowflake`，主键/外键为 19 位雪花 ID，
 * 超出 JS `Number.MAX_SAFE_INTEGER`（2^53-1 = 9007199254740991，16 位），
 * `JSON.parse` 按 IEEE754 double 解析会丢精度（末位变 0）。
 *
 * 因此后端统一把 ID 序列化为**字符串**下发；而本地构造/旧代码里仍可能是数字。
 * 所有 ID / 外键字段一律使用本类型，不要写成 `number` 或裸 `number | string`。
 */
export type ID = number | string;
