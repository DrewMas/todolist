export default function InProgress({state}) {
    console.log(state)
    return (
        <div>
            {
                state.map((el)=>{
                    return <div>{el.name}</div>

                })

            }

        </div>

    );
}