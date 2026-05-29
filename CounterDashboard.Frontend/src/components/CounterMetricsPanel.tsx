function CounterMetricsPanel({metrics}: {metrics: {label: string, value: number | string, meta: string}[]}) {
    const metricComponents = metrics.map(metric => {
        return (
            <article className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.meta}</small>
            </article>
        )
    })
    return (
        <section className="metric-panel">
            {metricComponents}
        </section>
    )
}

export default CounterMetricsPanel
