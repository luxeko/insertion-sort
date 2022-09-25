import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import Loader from './loading'
import toast from './toast';

export default function Simulator() {
    const [primaryArray, setPrimaryArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isPlay, setIsPlay] = useState(false)
    const [time, setTime] = useState(800)
    let [count, setCount] = useState(10);
    const logger = [];
    

    function incrementCount() {
        count = count + 1;
        if(count > 12) {
            count = 12;  
            toast({
                title: "Error!",
                message: "Vui lòng chọn dưới 12 số để thấy được mô phỏng tốt hơn",
                type: "error",
            })
            
        }
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        if(count < 2) {
            count = 2
            toast({
                title: "Error!",
                message: "Vui lòng chọn trên 2 số để có thể mô phỏng",
                type: "error",
            })
        }
        setCount(count);
    }
    const insertionSort = async () => {
        let delay = time;
        let currentArr = primaryArray
        for (let i = 1; i < currentArr.length; i++) {
            let current = currentArr[i]
            let j = i - 1
            console.log(current);
            // let curr_id = current.split('id="')[1].split('"')[0];
            // let nxt_ele = currentArr[j].split('id="')[1].split('"')[0];
            // document.getElementById(curr_id).backgroundColor = '#FF7F50';
            while (j >= 0 && currentArr[j] > current) {
                // document.getElementById(nxt_ele).style.backgroundColor = '#DC143C';
                // nxt_ele = currentArr[j].split('id="')[1].split('"')[0];
                // document.getElementById(nxt_ele).style.backgroundColor = '#6A5ACD';
                setPrimaryArray([...primaryArray,currentArr]);
              await sleep(delay)
              currentArr[j + 1] = currentArr[j];
              j--
            }
            currentArr[j + 1] = current;
            setPrimaryArray([...primaryArray,currentArr]);
            // document.getElementById(curr_id).style.backgroundColor = '#FF7F50';
            // document.getElementById(nxt_ele).style.backgroundColor = '#6A5ACD';
            await sleep(delay * 3.0 / 5);
            // document.getElementById(curr_id).style.backgroundColor = '#DC143C';
            // document.getElementById(nxt_ele).style.backgroundColor ='#DC143C';
            console.log("xong");
        }
    }
    function createArray() {
        let array = [];
        for(let i = 0; i < count; i++) {
            const number = Math.floor(Math.random() * 50);
            if(array.indexOf(number) === -1) {
                array.push(number)
            }
            else {
                i--;
            }
        }
        setPrimaryArray(array);
    }
    useEffect(() => {
        createArray()
      }, [])
    const sleep = (milliSeconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliSeconds))
    }
    const finishedAnimation = async () => {
        for (let i = 0; i < primaryArray.length; i++) {
          let bar = document.getElementById(i).style
          bar.backgroundColor = 'green'
          await sleep(time)
        }
        // setDisableOptions(false)
    }
   
    return (
        <>
            {loading ? <Loader /> : 
            <>
                <div id='toast'></div>
                <Link className='prev__page' to="/InsertionSort">
                    <div>
                        <i className="fa-solid fa-backward"></i>
                        <div>
                            <p>Mở đầu</p>
                        </div>
                    </div>
                </Link>
                <div className='simulator'>
                    <div className='insertion_sort'>
                        <div className='button__plus__minus'>
                            <div>
                               <p>Số lượng phần tử: </p>
                            </div>
                           <div>
                               <button onClick={decrementCount}>-</button>
                               <div>{count}</div>
                               <button onClick={incrementCount}>+</button>
                           </div>
                           <div>
                               <button onClick={createArray}>Tạo mảng ngẫu nhiên</button>
                           </div>
                        </div>
                        <>
                            <div className='array_container'>
                                <div className='render_array'>
                                    {primaryArray && primaryArray.map((e, index) => (
                                        <div key={index} className='element_box' id={index}>
                                            {e}
                                        </div>
                                    ))}
                                </div>
                                <div className='compare'>
                                    <div className='element_box'><i className="fa-solid fa-question"></i></div>
                                    <div> <strong> <i className="fa-solid fa-less-than"></i></strong> </div>
                                    <div className='element_box'><i className="fa-solid fa-question"></i></div>
                                </div>
                            </div>
                            <div className='range'>
                                <div>
                                    <p>Tốc độ: </p>
                                </div>
                                <div>
                                    <p className='showTime'>{time} ms</p>
                                </div>
                                <div>
                                    <input type="range" step={1} max={1000} min={10} value={time} onChange={(e) => setTime(e.target.value)}></input>
                                </div>
                             
                                <div>
                                    <button onClick={insertionSort}>{isPlay ? "Dừng mô phỏng" : "Chạy mô phỏng"}</button>
                                </div>
                            </div>
                        </>
                    </div>
                    <div className='console_log'>
                      
                    </div>
                </div>
           </>}
        </>
    )
}
