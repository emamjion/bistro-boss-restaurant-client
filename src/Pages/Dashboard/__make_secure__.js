/**
 * ------------------ 
 *              Basic Layer
 * ----------------------------------------
 * 1. Do not show the link to them who should not see it.
 * Only show to the person/types of user who should see it.
 * 2. Do not allow to visit the link by typing on the url.
 * Use admin that will check wether the user is admin or not.
 * if not admin then redirect to any other page. You could logout user and send them to the login page as well.
 * --------------------------- 
 *         To Send Data
 * ---------------------------
 * 1. verify Jwt token (send authorization token in the header to the server.)
 * if possible use axios to send jwt token by intercepting the request.
 * 2. if it is an admin activity, Make sure only admin user is posting data. 
 * by using verifyAdmin
 * 
 * 
 */