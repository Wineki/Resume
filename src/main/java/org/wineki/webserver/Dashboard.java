/**
 *    Copyright 2014 Renren.com
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package org.wineki.webserver;

import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @date Sep 6, 2014
 * @author zhe
 * 
 */
public class Dashboard extends HttpServlet {
	/** https://gist.github.com/ZheYuan/def66336b8a0278cac1f */
	public static final String MOBILE_DEVICE_REGEX = ".*(Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune).*";
	//public static final String MOBILE_DEVICE_REGEX = "^M.*";
	
	private static final Pattern pattern = Pattern.compile(MOBILE_DEVICE_REGEX, Pattern.CASE_INSENSITIVE);
	private static final String DEBUG_STRING = "Mozilla/5.0 (Linux; Android 4.1.1; MI 2 Build/JRO03L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.131 Mobile Safari/537.36";
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Matcher matcher = pattern.matcher(req.getHeader("User-Agent"));
		
		
		if (matcher.matches()) {
			System.err.println("User-Agent MOBILE " + req.getHeader("User-Agent"));
			req.getRequestDispatcher("/index-p.html").forward(req, resp);
		} else {
			System.err.println("User-Agent DESKTOP " + req.getHeader("User-Agent"));
			req.getRequestDispatcher("/index-b.html").forward(req, resp);
		}
	}
	
	public static void main(String [] args) {
		Matcher matcher = pattern.matcher(DEBUG_STRING);
		System.err.println("User-Agent " + matcher.matches() + " " + DEBUG_STRING);

	}
	
}
