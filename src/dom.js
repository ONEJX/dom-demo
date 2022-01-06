window.dom = {
    //新增节点
    create(string){
        const container = document.createElement('template')
        container.innerHTML = string
        return container.content.firstChild //只能用这种方法返回元素
    },
    //新增弟弟
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling)//把node2插到node的下一个节点(是一个文本)的前面
    },
    //新增哥哥
    before(node,node2){
        node.parentNode.insertBefore(node2,node)
    },
    //新增儿子
    append(parent,child){
        parent.appendChild(child)
    },
    //新增爸爸
    wrap(parent,child){
        dom.before(child,parent)
        dom.append(parent,child)
    },
    //删除节点
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    //删除所有子节点
    empty(node){
        const {childNodes} = node
        const arr = []
        let firstChild= node.firstChild   
        while(firstChild){
            arr.push(dom.remove(firstChild))
            firstChild = node.firstChild
        }
        return arr
    },
    //读写属性
    attr(node,name,value){
        if(arguments.length === 3){
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
           return node.getAttribute(name)
        }
    },
    //读写文本
    text(node,string){
        if('innerText' in node){
            if(arguments.length === 2){
                node.innerText = string
            }else if(arguments.length === 1){
                return node.innerText
            }
        }else{
            if(arguments.length === 2){
                node.textContent = string
            }else if(arguments.length === 1){
                 return node.textContent
            }
        }
    },
    //读写HTML内容
    html(node,string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments === 1){
            return node.innerHTML
        }
    },
    //读写style内容
    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }else if(typeof name === 'string'){
                return node.style[name] 
            }
        }
    },
    class:{
        //添加className
        add(node,className){
            node.classList.add(className)
        },
        //删除className
        remove(node,className){
            node.classList.remove(className)
        },
        //检查是否拥有className
        has(node,className){
            return node.classList.contains(className)
        }
    },
    //添加事件
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    //删除事件
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    //查寻单个元素
    find(selector,scope){
        return (scope || document).querySelector(selector)
    },
    //查寻多个元素
    findAll(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    //查寻父元素
    parent(node){
        return node.parentNode
    },
    //查寻子元素
    children(node){
        const nodeList = node.childNodes
        const arr = []
        for(let i=0;i<nodeList.length;i++){
            if(nodeList[i].nodeType === 3){
                continue;
            }else{
                arr.push(nodeList[i])
            }
        }
        return arr
    },
    //查寻所有兄弟元素
    siblings(node){
       return Array.from(node.parentNode.children).filter(n => n!==node)
    },
    //查寻下一个元素
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    //查寻上一个元素
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    //遍历所有元素
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    //查寻自己是第几个元素
    index(node){
        const list = dom.children(node.parentNode)
        let i;
        for(i=0;i<list.length;i++){
            if(list[i] === node){
                break;
            }
        }
        return i
    }
}