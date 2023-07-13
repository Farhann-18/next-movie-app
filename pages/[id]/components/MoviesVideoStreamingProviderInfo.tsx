import HeadingTitle from '@/components/HeadingTitle'

type Props = { streamingInfoProvider: string }

export default function MoviesVideoStreamingProviderInfo({
    streamingInfoProvider,
}: Props) {
    return (
        <>
            <div
                className="card card-body"
                style={{ borderRadius: '12px', backgroundColor: '#181a18' }}
            >
                <HeadingTitle title="Perhatian" />
                <div className="text-secondary">{streamingInfoProvider}</div>
            </div>
        </>
    )
}
