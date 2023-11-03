import styles from '../style'

function Footer() {
  return (
    <footer className={`text-white bg-black-gradient ${styles.paddingX}`}>
      <div className="flex items-center justify-between py-6">
        <div>
          <img src="https://leadschool.in/wp-content/uploads/2021/06/logo.svg" alt="Your Logo" className="w-auto h-12" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
