

export default function page() {
  return (
    <div>
        signup
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
    </form>
    </div>
  )
}


