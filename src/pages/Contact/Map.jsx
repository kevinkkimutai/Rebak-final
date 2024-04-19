

function Map() {
  return (
    <div>
         <div className="px- py- flex-auto">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7391787666993!2d35.280087568868446!3d-0.3608810988301523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a59e6684c82d7%3A0x3c25594c1fa8a75f!2sKericho%20Green%20Stadium!5e0!3m2!1sen!2ske!4v1713444067208!5m2!1sen!2ske"
                            className="w-full h-[450px] rounded-lg"
                            allowfullscreen="true"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="maps"
                          ></iframe>
                        </div>
    </div>
  )
}

export default Map