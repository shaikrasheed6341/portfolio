import Quationcard from "./Quationcard";

const Quation = () => {
    return (
        <div>
            <div className="grid grid-cols-3 space-x-2 my-3 ">
                <div>

                    <Quationcard title="Modern websites"  iconindex={0} para="I build powerful websites that can potentially empower your company." />
                </div>
                <div>
                    <Quationcard title="Fast Learning" iconindex={1} para="I have built projects with frameworks like React, React-native and Flask" />

                </div><div>
                    <Quationcard title="Scalable Software" iconindex={2} para="I write scalable, secure and fast programs in languages like Java and javascript" />

                </div>
            </div>
        </div>
    )
}
export default Quation;