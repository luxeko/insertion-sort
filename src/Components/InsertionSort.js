import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Loader from './loading'
import demo from '../Assets/demo.gif'
import img1 from '../Assets/Example/insertion-sort-1.jpg'
import img2 from '../Assets/Example/insertion-sort-2.jpg'
import img3 from '../Assets/Example/insertion-sort-3.jpg'
import img4 from '../Assets/Example/insertion-sort-4.jpg'
import img5 from '../Assets/Example/insertion-sort-5.jpg'

export default function InsertionSort() {
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500);
    // }, [])
    const [isShow, setIsShow] = useState(false);
    const Container = () => {
        return (
            <>
                <Link className='prev__page' to="/">
                    <div>
                        <i className="fa-solid fa-backward"></i>
                        <div>
                            <p>About us</p>
                        </div>
                    </div>
                </Link>
                <Link className='next__page' to="/Simulator">
                    <div>
                        <div>
                            <p>Mô phỏng</p>
                        </div>
                        <i className="fa-solid fa-forward"></i>
                    </div>
                </Link>
                <div className='insertionSort'>
                    <div className='introduction'>
                        <div className='first'>
                            <h2>I. Định nghĩa</h2>
                            <p>
                            - Sắp xếp chèn <i>(insertion sort)</i>: là một giải thuật sắp xếp dựa trên so sánh in-place. Ở đây, một danh sách con luôn luôn được duy trì dưới dạng đã qua sắp xếp. Sắp xếp chèn là chèn thêm một phần tử vào danh sách con đã qua sắp xếp. Phần tử được chèn vào vị trí thích hợp sao cho vẫn đảm bảo rằng danh sách con đó vẫn sắp theo thứ tự.
                            </p>
                            <img src={demo} alt='demo'/>
                            <p>
                                - Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn
                            </p>
                            <p>- Tình huống tốt nhất: độ phức tạp = O(N)</p>
                            <p>- Tình huống xấu nhất: độ phức tạp = O(N^2)</p>
                            <button onClick={() => setIsShow(!isShow)}>Mô tả  <i className="fa-solid fa-forward"></i></button>
                        </div>
                    </div>
                    <div style={{display: isShow ? 'block' : 'none'}} className="third">
                        <h2>II. Mô tả thuật toán</h2>
                        <div>
                            <strong>Cho mảng ngẫu nhiên: [12, 11, 13, 5, 6]</strong>
                            <p><b>1. </b>Bắt đầu từ phần tử thứ 2 của mảng, nên vòng lặp sẽ lặp qua 11, 13, 5, 6.</p>
                            <img src={img1} alt='example1'/>
                            <p><b>2. </b>Với <code>i = 1 </code>(Phần tử thứ 2 của mảng). Vì 11 nhỏ hơn 12 nên di chuyển 12 lên vị trí thứ <code>i</code> và chèn 11 vào trước 12 (vị trí thứ <code>i - 1</code>)</p>
                            <img src={img2} alt='example2'/>
                            <p><b>3. </b>Với <code>i = 2</code>. 13 sẽ vẫn ở vị trí của nó vì tất cả các phần tử trong <code>A[0 ... i - 1]</code> đều nhỏ hơn 13</p>
                            <img src={img3} alt='example3'/>
                            <p><b>4. </b>Với <code>i = 3</code>. 5 sẽ di chuyển về đầu và tất cả các phần tử khác từ 11 đến 13 sẽ di chuyển trước một vị trí so với vị trí hiện tại của chúng.</p>
                            <img src={img4} alt='example4'/>
                            <p><b>5. </b>Với <code>i = 4</code>. 6 sẽ chuyển đến vị trí sau 5, và các phần tử từ 11 đến 13 sẽ di chuyển trước một vị trí so với vị trí hiện tại của chúng.</p>
                            <img src={img5} alt='example5'/>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
    return (
        <>
            {loading ? <Loader /> : <Container/>}
        </>
      
    )
}
