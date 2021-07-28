/*!
 *  Bayrell Web Frontend library
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * Module version
 */
export const VERSION = '0.0.1';


/**
 * Virtual Dom Types
 */
export const VirtualDomTypes = 
{
	ELEMENT: "element",
	COMPONENT: "component",
};


/**
 * Virtual Dom Class
 */
export class VirtualDom
{
	/**
	 * Constructor
	 */
	constructor()
	{
		this.elem = null;
		this.type = "";
		this.index = 0;
	}


	/**
	 * Create new instance of the VirtualDom
	 * @param {HTMLElement} elem 
	 * @param {VirtualDomTypes} type 
	 * @returns 
	 */
	static create(elem, type)
	{
		let res = new VirtualDom();
		res.elem = elem;
		res.type = type;
		return res;
	}


	/**
	 * Create next element
	 * @param {HTMLElement} elem_name 
	 * @param {Dict} attrs 
	 * @returns 
	 */
    e(elem_name, attrs)
	{
		let new_virtual_dom = new VirtualDom();
		return new_virtual_dom;
	}


	/**
	 * Patch virtual dom
	 */
	p()
	{

	}
}


/**
 * Component
 */
export class Component
{

}
