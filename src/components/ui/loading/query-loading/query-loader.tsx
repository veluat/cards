import s from './query-loader.module.scss'

export const QueryLoader = () => {
  return (
    <div className={s.container}>
      <div className={s.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
