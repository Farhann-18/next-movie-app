type Props = { title: string }

export default function MovieCardItemTitle({ title }: Props) {
    return (
        <div className="next-card-item__title text-wrap text-center">
            {title}
        </div>
    )
}
