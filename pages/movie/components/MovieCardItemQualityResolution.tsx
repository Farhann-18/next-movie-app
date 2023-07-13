type Props = { qualityResolutionSource: string }

export default function MovieCardItemQualityResolution({
    qualityResolutionSource,
}: Props) {
    return (
        <>
            {qualityResolutionSource === 'CAM' ||
            qualityResolutionSource === 'SD' ? (
                <div className="next-card-item__qualityResolution bg-danger">
                    {qualityResolutionSource}
                </div>
            ) : (
                <div className="next-card-item__qualityResolution">
                    {qualityResolutionSource}
                </div>
            )}
        </>
    )
}
