// @ts-ignore
import compression from 'compression'
import { fromNodeMiddleware } from 'h3'

// compression‑middleware вмешивается на этапе отдачи HTML, оборачивая весь ответ сервера.
export default fromNodeMiddleware(
    compression({
        threshold: 0, // сжимать всё
        brotli: true,
        level: 6, // баланс скорость/компрессия
    })
)