import './style.css';

export default function Register() {
    return (
        <div >
            <form>
                <div>
                    <label>Name: </label>
                    <input type='text' id='name' />
                </div>
                <div>
                    <label>Email: </label>
                    <input type='email' id='email' />
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' id='pass' />
                </div>

                <button type='submit'>Register</button>

            </form>
        </div>
    );
}
