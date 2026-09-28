export default function StatCard({title , count}){
    return (
        <div className="stat-card">
            <h3>{title}</h3>
            <h3>{count}</h3>
        </div>
    )
}